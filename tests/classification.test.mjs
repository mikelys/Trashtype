import test from 'node:test';
import assert from 'node:assert/strict';
import {findItems,items} from '../src/data.js';
import {interpretMatches,recognitionLabels} from '../src/recognition-catalog.js';
import {readFile} from 'node:fs/promises';

test('Chinese, natural phrases, plurals and small typos find useful item names',()=>{
  for(const [query,id] of [['纸杯','coffee'],['塑料瓶','bottle'],['外卖盒','takeout'],['奶茶杯','plasticcup'],['咖啡渣','tea'],['batteries','battery'],['battrey','battery'],['batery','battery'],['plastic bottles','bottle'],['a photo of a paper coffee cup','coffee']]){
    assert.equal(findItems(query)[0]?.id,id,query);
  }
  assert.deepEqual(findItems('an unknown unicorn object'),[]);
  assert.deepEqual(findItems(''),[]);
});

test('material and condition change the destination for similar-looking objects',()=>{
  const cupIds=findItems('cup').map(item=>item.id);
  assert.ok(cupIds.includes('coffee')&&cupIds.includes('ceramic')&&cupIds.includes('drinkingglass'));
  assert.equal(findItems('纸杯')[0].bin,'blue');
  assert.equal(findItems('陶瓷杯')[0].bin,'garbage');
  assert.equal(findItems('greasy pizza box')[0].bin,'green');
  assert.equal(findItems('clean pizza box')[0].bin,'blue');
  assert.equal(findItems('木餐具')[0].bin,'garbage');
  assert.equal(findItems('鸡蛋壳')[0].bin,'green');
});

test('image suggestions name objects without deciding an invisible material',()=>{
  const result=interpretMatches([{id:'cup',score:.8,similarity:.28},{id:'bottle',score:.1,similarity:.20}]);
  assert.match(result.name,/杯子/);
  assert.equal(result.query,'cup');
  assert.ok(result.candidates[0].itemIds.includes('ceramic'));
  assert.ok(result.candidates[0].itemIds.includes('coffee'));
  assert.equal(result.bin,undefined);
});

test('unknown, weak and ambiguous images cannot become confident bin decisions',()=>{
  assert.equal(interpretMatches([{id:'unknown-person',score:.9,similarity:.4}]).name,'');
  assert.equal(interpretMatches([{id:'cup',score:.9,similarity:.1}]).name,'');
  assert.equal(interpretMatches([{id:'cup',score:.15,similarity:.3}]).name,'');
  assert.ok(interpretMatches([{id:'cup',score:.4,similarity:.3},{id:'bottle',score:.38,similarity:.29}]).uncertain);
});

test('every recognition label resolves to real catalog entries and matching embeddings',async()=>{
  const embeddings=JSON.parse(await readFile(new URL('../public/recognition-labels.json',import.meta.url),'utf8'));
  assert.equal(embeddings.labels.length,recognitionLabels.length);
  recognitionLabels.forEach((label,index)=>{
    assert.equal(embeddings.labels[index].id,label.id);
    assert.equal(embeddings.labels[index].prompt,label.prompt);
    assert.ok(embeddings.labels[index].vectors.length>0);
    for(const vector of embeddings.labels[index].vectors)assert.equal(vector.length,512);
    for(const id of label.itemIds||[])assert.ok(items.find(item=>item.id===id),id);
  });
});
