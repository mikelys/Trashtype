import {interpretMatches} from './recognition-catalog';
let worker;
let current=0;

export async function recognizeImage(image,onProgress){
  if(!worker)worker=new Worker(new URL('./recognition.worker.js',import.meta.url),{type:'module'});
  const id=++current;
  const canvas=document.createElement('canvas');canvas.width=canvas.height=256;
  const context=canvas.getContext('2d',{willReadFrequently:true});
  // Match the model's center crop: fill the square without stretching the item.
  const side=Math.min(image.naturalWidth,image.naturalHeight);
  context.drawImage(image,(image.naturalWidth-side)/2,(image.naturalHeight-side)/2,side,side,0,0,256,256);
  const pixels=context.getImageData(0,0,256,256).data;
  const labelsUrl=new URL(`${import.meta.env.BASE_URL}recognition-labels.json`,document.baseURI).href;
  return new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{worker.terminate();worker=null;cleanup();reject(new Error('Recognition took too long. Try again on Wi-Fi or search below.'))},180000);
    function cleanup(){clearTimeout(timer);worker?.removeEventListener('message',message);worker?.removeEventListener('error',error)}
    function message(event){if(event.data.id!==id)return;if(event.data.type==='progress')onProgress(event.data.message);else{cleanup();event.data.type==='result'?resolve(interpretMatches(event.data.matches)):reject(new Error(event.data.message))}}
    function error(){cleanup();worker?.terminate();worker=null;reject(new Error('This device could not start photo recognition. Search for your item below.'))}
    worker.addEventListener('message',message);worker.addEventListener('error',error);
    worker.postMessage({id,pixels,labelsUrl},[pixels.buffer]);
  });
}
