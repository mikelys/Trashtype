import {CLIPVisionModelWithProjection,Tensor,env} from '@huggingface/transformers';
import {recognitionLabels,labelPrompts} from './recognition-catalog';

env.allowLocalModels=false;
// One WASM thread works on Safari and static hosts without cross-origin isolation.
env.backends.onnx.wasm.numThreads=1;
env.backends.onnx.wasm.proxy=false;
let ready;

self.onmessage=async({data})=>{
  const {id,pixels,labelsUrl}=data;
  try{
    if(!ready){
      ready=(async()=>{
        self.postMessage({id,type:'progress',message:'Downloading the improved recognizer. First use may take a minute on Wi-Fi…'});
        const response=await fetch(labelsUrl);
        if(!response.ok)throw new Error('Object names could not be loaded');
        const embeddings=await response.json();
        if(embeddings.model!=='Xenova/mobileclip_s0' || embeddings.labels.length!==recognitionLabels.length ||
          embeddings.labels.some((label,index)=>label.id!==recognitionLabels[index].id || JSON.stringify(label.prompts)!==JSON.stringify(labelPrompts(recognitionLabels[index])))){
          throw new Error('Object names need an update. Refresh the app.');
        }
        const model=await CLIPVisionModelWithProjection.from_pretrained(embeddings.model,{
          dtype:'fp32',device:'wasm',progress_callback:event=>{
            if(event.status==='progress' && event.file?.endsWith('.onnx'))
              self.postMessage({id,type:'progress',message:`Downloading recognizer: ${Math.round(event.progress||0)}%. Photos stay on your device.`});
          },
        });
        return {model,embeddings};
      })().catch(error=>{ready=null;throw error});
    }
    const {model,embeddings}=await ready;
    self.postMessage({id,type:'progress',message:'Finding a clear item name…'});
    // MobileCLIP S0 preprocessing: 256px square RGB, rescale 1/255, no normalization.
    // Canvas resize runs on the main thread, so older Safari needs no OffscreenCanvas.
    const values=new Float32Array(3*256*256);
    for(let index=0;index<256*256;index++)for(let channel=0;channel<3;channel++)values[channel*256*256+index]=pixels[index*4+channel]/255;
    const {image_embeds}=await model({pixel_values:new Tensor('float32',values,[1,3,256,256])});
    const vector=image_embeds.normalize().tolist()[0];
    const matches=embeddings.labels.map(label=>({id:label.id,similarity:Math.max(...label.vectors.map(prototype=>prototype.reduce((sum,value,index)=>sum+value*vector[index],0)))}));
    const max=Math.max(...matches.map(x=>x.similarity));
    const sum=matches.reduce((sum,x)=>sum+Math.exp((x.similarity-max)*40),0);
    matches.forEach(x=>x.score=Math.exp((x.similarity-max)*40)/sum);
    self.postMessage({id,type:'result',matches});
  }catch(error){self.postMessage({id,type:'error',message:error.message||'Recognition unavailable'})}
};
