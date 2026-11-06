// Run after changing recognition-catalog.js. CPU only; downloads model weights.
// ONNXRUNTIME_NODE_INSTALL_CUDA=skip npm ci
// node scripts/build-label-embeddings.mjs /path/to/downloaded/mobileclip_s0
import {AutoTokenizer,CLIPTextModelWithProjection,env} from '@huggingface/transformers';
import {writeFile} from 'node:fs/promises';
import {recognitionLabels,labelPrompts} from '../src/recognition-catalog.js';

const source=process.argv[2]||'Xenova/mobileclip_s0';
env.allowLocalModels=true;
const tokenizer=await AutoTokenizer.from_pretrained(source);
const model=await CLIPTextModelWithProjection.from_pretrained(source,{dtype:'q8',device:'cpu'});
const labels=recognitionLabels.map(label=>({id:label.id,prompt:label.prompt,prompts:labelPrompts(label),vectors:[]}));
const examples=labels.flatMap(label=>label.prompts.map(prompt=>({label,prompt})));
for(let offset=0;offset<examples.length;offset+=4){
  const batch=examples.slice(offset,offset+4);
  const inputs=tokenizer(batch.map(example=>example.prompt),{padding:'max_length',truncation:true});
  const {text_embeds}=await model(inputs);
  const vectors=text_embeds.normalize().tolist();
  batch.forEach((example,index)=>example.label.vectors.push(vectors[index].map(value=>Number(value.toFixed(7)))));
  console.log(`Embedded ${Math.min(offset+4,examples.length)}/${examples.length} appearance descriptions`);
}
await model.dispose();
await writeFile(new URL('../public/recognition-labels.json',import.meta.url),JSON.stringify({model:'Xenova/mobileclip_s0',version:2,labels}));
