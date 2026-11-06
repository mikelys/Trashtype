import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import assert from 'node:assert/strict';
import { cameraErrorMessage } from '../src/camera.js';

assert.equal(cameraErrorMessage(new Error('User cancelled photos app')), null);
assert.match(cameraErrorMessage(new Error('Permission denied')), /iPhone Settings/);
assert.match(cameraErrorMessage(new Error('Camera unavailable')), /search/);

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1', '--port', '5180', '--strictPort'], { stdio: 'pipe' });
let browser;
try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Server did not start')), 15000);
    server.once('error', reject);
    server.once('exit', code => reject(new Error(`Server exited: ${code}`)));
    server.stdout.on('data', data => {
      if (String(data).includes('127.0.0.1:5180')) { clearTimeout(timer); resolve(); }
    });
  });
  browser = await chromium.launch({
    ...(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}),
    headless: true, args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:5180');
  await page.getByRole('heading', { name: 'Wondering which bin?' }).waitFor();
  for (const width of [320, 390, 430]) {
    await page.setViewportSize({ width, height: 844 });
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `Overflow at ${width}px`);
    assert.equal(await page.locator('.search-wrap input').evaluate(el => getComputedStyle(el).fontSize), '16px');
  }
  await page.setViewportSize({ width: 390, height: 844 });
  const chooser = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Scan an item' }).click();
  await chooser;
  await page.getByRole('button', { name: 'Coffee cup', exact: true }).click();
  await page.locator('.search-results .item-row').first().click();
  assert.match(await page.getByRole('dialog').innerText(), /Blue box/);
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.getByRole('button', { name: 'My history', exact: true }).click();
  assert.match(await page.locator('main').innerText(), /Paper coffee cup/);
  await page.reload();
  await page.getByRole('button', { name: 'My history', exact: true }).click();
  assert.match(await page.locator('main').innerText(), /Paper coffee cup/);
  await page.getByRole('button', { name: 'Clear history' }).click();
  await page.getByRole('button', { name: 'Clear my history' }).click();
  assert.match(await page.locator('main').innerText(), /0 items explored/);
  await page.getByRole('button', { name: 'Bin guide', exact: true }).click();
  await page.getByRole('button', { name: 'Green bin', exact: true }).click();
  assert.equal(await page.locator('.guide-item').count(), 7);
  assert.match(await page.locator('.guide-items').innerText(), /Eggshells/);
  assert.ok(!(await page.locator('.guide-items').innerText()).includes('Wooden or bamboo'));
  await page.getByRole('button', { name: 'Sort an item', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search for a waste item' }).fill('unknown-material-123');
  await page.getByRole('link', { name: /check Markham/ }).waitFor();
  // A failed model download must leave a working manual classification path.
  await page.context().route(/https:\/\/(huggingface\.co|cdn\.jsdelivr\.net)\//, route => route.abort());
  await page.locator('input[type=file]').nth(1).setInputFiles('public/apple-touch-icon.png');
  await page.getByText('Image recognition couldn’t load.', { exact: false }).waitFor({ timeout: 30000 });
  await page.getByRole('textbox', { name: 'Confirm item name' }).fill('banana');
  await page.locator('.modal-results .item-row').first().click();
  assert.match(await page.getByRole('dialog').innerText(), /Green bin/);
  await page.getByRole('button', { name: 'Close dialog' }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  assert.deepEqual(errors, []);
  // Mock only model output to check name-to-material UI deterministically.
  const named=await browser.newPage({viewport:{width:390,height:844}});
  await named.addInitScript(()=>{
    window.Worker=class extends EventTarget{
      postMessage({id}){setTimeout(()=>this.dispatchEvent(new MessageEvent('message',{data:{id,type:'result',matches:window.bagPhoto?[{id:'bag',score:.85,similarity:.32},{id:'wastebin',score:.1,similarity:.22}]:window.unknownPhoto?[{id:'unknown-scene',score:.9,similarity:.4}]:[{id:'cup',score:.85,similarity:.32},{id:'bottle',score:.05,similarity:.2}]}})),100)}
      terminate(){}
    };
  });
  await named.goto('http://127.0.0.1:5180');
  await named.locator('input[type=file]').nth(1).setInputFiles('public/apple-touch-icon.png');
  await named.getByRole('heading',{name:'杯子 · Cup or mug'}).waitFor();
  assert.equal(await named.getByRole('textbox',{name:'Confirm item name'}).inputValue(),'cup');
  assert.match(await named.locator('.modal-results').innerText(),/Paper coffee cup/);
  await named.locator('.modal-results .item-row').filter({hasText:'Broken ceramic mug'}).click();
  assert.match(await named.getByRole('dialog').innerText(),/Clear bag/);
  await named.getByRole('button',{name:'Close dialog'}).click();
  await named.evaluate(()=>window.unknownPhoto=true);
  await named.locator('input[type=file]').nth(1).setInputFiles('public/apple-touch-icon.png');
  await named.getByText('I couldn’t confidently name this item.',{exact:false}).waitFor();
  assert.equal(await named.locator('.recognized-name').count(),0);
  assert.equal(await named.locator('.modal-results .item-row').count(),0);
  await named.getByRole('textbox',{name:'Confirm item name'}).fill('电池');
  await named.locator('.modal-results .item-row').first().click();
  assert.match(await named.getByRole('dialog').innerText(),/Drop-off/);
  await named.getByRole('button',{name:'Close dialog'}).click();
  await named.evaluate(()=>{window.unknownPhoto=false;window.bagPhoto=true});
  await named.locator('input[type=file]').nth(1).setInputFiles('public/apple-touch-icon.png');
  await named.getByRole('button',{name:'🗑️ 垃圾桶本身 · The bin'}).click();
  await named.locator('.modal-results .item-row').filter({hasText:'Stainless steel or metal waste bin'}).click();
  assert.match(await named.getByRole('dialog').innerText(),/Scrap metal/);
  assert.match(await named.getByRole('dialog').innerText(),/905-477-5530/);
  assert.ok((await named.getByRole('link',{name:'Check official Markham guidance'}).getAttribute('href')).endsWith('appliances-metal-items'));
  await named.getByRole('button',{name:'Close dialog'}).click();
  await named.locator('input[type=file]').nth(1).setInputFiles('public/apple-touch-icon.png');
  await named.getByRole('button',{name:'🛍️ 塑料内衬袋 · The liner'}).click();
  assert.match(await named.locator('.modal-results').innerText(),/Dirty or used garbage-bin liner/);
  assert.match(await named.locator('.modal-results').innerText(),/Plastic bag/);
  console.log('Passed: mobile layout, Chinese/English search, camera fallback, persisted history, filters, failed download recovery, automatic naming, material confirmation and unknown-photo handling.');
} finally {
  await browser?.close();
  server.kill();
}
