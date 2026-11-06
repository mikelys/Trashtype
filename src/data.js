export const sources = {blue:'https://www.markham.ca/neighbourhood-services/recycling-garbage/blue-box',green:'https://www.markham.ca/neighbourhood-services/recycling-garbage/green-bin',garbage:'https://www.markham.ca/neighbourhood-services/recycling-garbage/what-goes-where',depot:'https://www.markham.ca/neighbourhood-services/recycling-garbage/recycling-depots-drop-centres'};
export const bins = {blue:{name:'Blue box',label:'Recycling',color:'#3976ac',description:'Give packaging a new beginning.',examples:'Paper, containers & packaging',icon:'recycle'},green:{name:'Green bin',label:'Organics',color:'#4e8061',description:'Good things come full circle.',examples:'Food scraps & soiled paper',icon:'leaf'},garbage:{name:'Clear bag',label:'Garbage',color:'#777a76',description:'For what can’t be recovered.',examples:'Non-recyclable household items',icon:'trash'},depot:{name:'Drop-off',label:'Special disposal',color:'#b1824b',description:'A little extra care goes a long way.',examples:'Batteries, electronics & more',icon:'pin'}};
export const items = [
{id:'bottle',name:'Plastic bottle',bin:'blue',emoji:'🧴',tags:'water bottle pop soda plastic container',tip:'Empty and rinse the bottle. Place it loose in your blue box.',note:'Plastic packaging can be recycled into something new.'},
{id:'banana',name:'Banana peel',bin:'green',emoji:'🍌',tags:'banana fruit apple orange vegetable food scraps peel',tip:'Remove any stickers and packaging, then place the peel in your green bin.',note:'All food scraps belong in Markham’s green bin.'},
{id:'can',name:'Aluminum can',bin:'blue',emoji:'🥫',tags:'tin can aluminum aluminium metal beverage soda beer',tip:'Empty and rinse. Put the can loose in your blue box.',note:'Keep food and liquid out of your recycling.'},
{id:'pizza',name:'Greasy pizza box',bin:'green',emoji:'🍕',tags:'pizza box greasy soiled cardboard',tip:'Place food-soiled cardboard in the green bin. A clean, dry lid can go in the blue box.',note:'Separate clean cardboard from food-soiled sections.'},
{id:'coffee',name:'Paper coffee cup',bin:'blue',emoji:'☕',tags:'coffee cup paper disposable takeout',tip:'Empty and rinse your paper beverage cup before putting it in the blue box.',note:'Paper beverage cups are accepted in the blue box under the 2026 program. Check the lid material separately.'},
{id:'battery',name:'Household batteries',bin:'depot',emoji:'🔋',tags:'battery batteries lithium cell',tip:'Keep batteries out of all curbside bins. Use a designated battery collection location.',note:'Check the official depot guide for accepted battery types and handling instructions.'},
{id:'glass',name:'Glass jar',bin:'blue',emoji:'🫙',tags:'glass jar bottle jam pickle',tip:'Empty and rinse the jar. Place it loose in your blue box.',note:'This guidance is for packaging glass, not drinking glasses or ceramics.'},
{id:'napkin',name:'Used paper towel',bin:'green',emoji:'🧻',tags:'napkin tissue paper towel soiled',tip:'Put food-soiled paper towels, napkins and tissues in your green bin.',note:'Keep towels contaminated with chemicals out. Check the official guide.'},
{id:'chips',name:'Chip bag',bin:'blue',emoji:'🍿',tags:'chip bag snack wrapper candy packaging',tip:'Empty out all crumbs and food before placing the packaging in the blue box.',note:'Snack wrappers and chip bags joined the blue box program in 2026.'},
{id:'foam',name:'Foam packaging',bin:'blue',emoji:'📦',tags:'foam styrofoam polystyrene packaging',tip:'Remove all food and rinse the packaging, then put it in the blue box.',note:'Foam packaging is accepted curbside under the 2026 program.'},
{id:'cardboard',name:'Cardboard box',bin:'blue',emoji:'📦',tags:'cardboard box paper carton cereal',tip:'Empty and flatten the box. Bundle oversized cardboard to Markham’s published size limits.',note:'Food-soiled sections, such as greasy pizza cardboard, belong in the green bin.'},
{id:'diaper',name:'Diaper',bin:'green',emoji:'🧷',tags:'diaper diapers hygiene',tip:'Put used diapers in your green bin, with all external packaging removed.',note:'Markham accepts diapers and personal hygiene products in the green bin.'},
{id:'ceramic',name:'Broken ceramic mug',bin:'garbage',emoji:'☕',tags:'ceramic mug cup broken dish plate bowl pottery',tip:'Carefully wrap sharp pieces and label them to protect collection workers. Use a clear garbage bag.',note:'Ceramics are not packaging glass. Check Markham’s guide for unusual or large items.'},
{id:'electronics',name:'Old electronics',bin:'depot',emoji:'📱',tags:'phone computer laptop electronics electronic cable',tip:'Bring accepted electronics to an appropriate collection depot. Remove personal data first.',note:'Check the depot guide for accepted devices, hours and any limits.'},
{id:'tea',name:'Tea bags & coffee grounds',bin:'green',emoji:'🫖',tags:'tea bag coffee grounds filter',tip:'Place tea bags, coffee grounds and paper coffee filters in your green bin.',note:'Remove outer packaging and any plastic parts.'},
{id:'plasticbag',name:'Plastic bag',bin:'blue',emoji:'🛍️',tags:'plastic bag film wrap shopping',tip:'Remove all contents. Put empty plastic bags and film in the blue box.',note:'Plastic bags and film are accepted curbside under the 2026 program.'}
];

const extraItems = [
{id:'soiledliner',name:'Dirty or used garbage-bin liner',zh:'脏污的垃圾桶内衬袋',bin:'garbage',source:'https://www.markham.ca/neighbourhood-services/recycling-garbage/curbside-collection',emoji:'🛍️',tags:'dirty used soiled garbage trash bin liner bag 脏垃圾袋 内衬袋 脏塑料袋 垃圾桶衬袋',tip:'先把袋内物品逐件分类；不要把沾污或装着混合垃圾的内衬袋直接当作塑料包装回收。处理袋子和剩余垃圾时须遵守 Markham 的透明垃圾袋要求，不要用不透明袋作为路边收集袋。',note:'这里处理的是内衬袋，不是金属桶。干净、空的塑料包装袋可另查塑料袋条目；实际路边收集须符合市政府透明袋规定。'},
{id:'metalbin',name:'Stainless steel or metal waste bin',zh:'不锈钢 / 金属垃圾桶',bin:'depot',destination:'Scrap metal · 废金属回收',source:'https://www.markham.ca/neighbourhood-services/recycling-garbage/appliances-metal-items',emoji:'🗑️',tags:'stainless steel metal iron waste bin trash can garbage can rubbish bin pedal wastebasket dustbin 垃圾桶 铁的垃圾桶 不锈钢的垃圾桶 不锈钢垃圾桶 铁垃圾桶 金属垃圾桶 不锈钢桶 铁桶 脚踏桶',tip:'先取出内衬袋及所有垃圾。小型金属桶可送至 Markham Recycling Depot；大型金属桶请拨 905-477-5530 预约免费金属物品收集。不要把桶本身投入蓝桶或绿桶。 Remove the liner and contents. Take a small metal bin to a Markham Recycling Depot; call 905-477-5530 to book free collection of a large metal item.',note:'这个结果针对桶本身，材质需确认为不锈钢或其他金属。内衬袋、桶内垃圾和可拆卸塑料件分别查询；其他材质的桶请查官方指南。市政府提供小型废金属投放及大型金属预约收集服务。'},
{id:'takeout',name:'Plastic takeout container',zh:'塑料外卖盒',bin:'blue',emoji:'🥡',tags:'takeout takeaway food container clamshell black plastic lunch box 外卖盒 餐盒 塑料饭盒 黑色塑料盒',tip:'Empty, scrape out food and rinse. Put the plastic packaging loose in the blue box.',note:'Black plastic packaging is accepted under Markham’s 2026 blue box program. Food belongs in the green bin.'},
{id:'plasticcup',name:'Disposable plastic cup',zh:'一次性塑料杯',bin:'blue',emoji:'🥤',tags:'plastic disposable drink cold cup iced coffee bubble tea boba 塑料杯 奶茶杯 饮料杯',tip:'Empty and rinse the plastic beverage cup. Check any accessories separately.',note:'This is packaging guidance. A reusable ceramic mug or drinking glass has a different disposal route.'},
{id:'drinkingglass',name:'Broken drinking glass',zh:'破碎玻璃杯',bin:'garbage',emoji:'🥛',tags:'drinking glass tumbler cup broken wine glass 玻璃杯 高脚杯 碎玻璃',tip:'Wrap sharp pieces securely, label them and follow Markham’s clear-bag garbage instructions.',note:'Drinking glasses are different from recyclable glass bottles and jars. Keep usable items for reuse.'},
{id:'carton',name:'Milk or juice carton',zh:'牛奶盒 / 果汁盒',bin:'blue',emoji:'🧃',tags:'milk juice drink beverage carton tetrapak tetra pak 牛奶盒 果汁盒 饮料纸盒 利乐包',tip:'Empty the carton and rinse out remaining liquid. Put the empty packaging in your blue box.',note:'Remove any food or liquid before recycling beverage packaging.'},
{id:'yogurt',name:'Yogurt or ice cream tub',zh:'酸奶盒 / 冰淇淋盒',bin:'blue',emoji:'🥣',tags:'yogurt yoghurt ice cream margarine plastic food tub pot container 酸奶盒 酸奶杯 冰淇淋盒 塑料食品盒',tip:'Empty and rinse the plastic tub, then place it loose in your blue box.',note:'Ice cream tubs are included in the expanded 2026 blue box program.'},
{id:'cleanpizza',name:'Clean pizza box',zh:'干净披萨盒',bin:'blue',emoji:'📦',tags:'clean pizza box lid dry cardboard 干净披萨盒 干净纸盒',tip:'Keep clean, dry cardboard in the blue box. Put greasy or food-soiled sections in the green bin.',note:'Separate the clean lid from the greasy base. Condition changes the right bin.'},
{id:'paper',name:'Clean paper or newspaper',zh:'干净纸张 / 报纸',bin:'blue',emoji:'📰',tags:'clean paper newspaper magazine flyer office printer sheet envelope 干净纸张 报纸 杂志 信封 传单',tip:'Keep paper clean and dry, and put it in the blue box.',note:'Food-soiled tissues and paper towels belong in the green bin instead.'},
{id:'paperbag',name:'Clean paper bag',zh:'干净纸袋',bin:'blue',emoji:'🛍️',tags:'clean paper bag brown kraft grocery takeout 干净纸袋 牛皮纸袋',tip:'Empty the bag. Recycle clean, dry paper; separate heavily food-soiled paper into the green bin.',note:'Remove non-paper handles, liners or contents and check them separately.'},
{id:'foil',name:'Aluminum foil or tray',zh:'铝箔 / 铝箔餐盒',bin:'blue',emoji:'🥧',tags:'aluminum aluminium foil tray pie pan tin foil 铝箔 锡纸 铝箔餐盒',tip:'Remove food and rinse the aluminum packaging before placing it in the blue box.',note:'Food residue belongs in your green bin, not in recycling.'},
{id:'tube',name:'Toothpaste or deodorant tube',zh:'牙膏管 / 除臭剂管',bin:'blue',emoji:'🪥',tags:'toothpaste deodorant tube packaging 牙膏管 牙膏皮 除臭剂管',tip:'Use up the contents and put the empty packaging in your blue box.',note:'Toothpaste and deodorant tubes are accepted under the expanded 2026 blue box program. This guidance is not for tubes containing hazardous products.'},
{id:'lid',name:'Plastic cup or container lid',zh:'塑料杯盖 / 盒盖',bin:'blue',emoji:'🥤',tags:'plastic coffee cup container lid cap 塑料杯盖 杯盖 盒盖 塑料盖',tip:'Remove food or liquid and put the plastic packaging lid in the blue box.',note:'Markham’s 2026 guide includes coffee cups and lids. Check non-plastic or unusual lids separately.'},
{id:'food',name:'Food scraps',zh:'食物残渣',bin:'green',emoji:'🍎',tags:'food scraps leftovers fruit vegetable apple orange peel bread rice meat fish bones 食物残渣 厨余 剩饭 剩菜 果皮 苹果 橙皮 面包 米饭 肉 鱼骨 骨头',tip:'Remove all packaging, stickers and cutlery. Put food scraps in the green bin.',note:'All food scraps are accepted in Markham’s green bin. Packaging must be sorted separately.'},
{id:'eggshell',name:'Eggshells',zh:'鸡蛋壳',bin:'green',emoji:'🥚',tags:'egg shell eggshell eggs 鸡蛋壳 蛋壳',tip:'Put eggshells in the green bin. Sort the egg carton separately by material.',note:'Eggshells are food scraps, while the carton is packaging.'},
{id:'mask',name:'Disposable face mask',zh:'一次性口罩',bin:'garbage',emoji:'😷',tags:'disposable face surgical medical mask 一次性口罩 医用口罩 口罩',tip:'Put used disposable masks in a clear garbage bag.',note:'Markham’s 2026 guide lists disposable masks as garbage.'},
{id:'glove',name:'Disposable plastic gloves',zh:'一次性塑料手套',bin:'garbage',emoji:'🧤',tags:'disposable plastic latex nitrile gloves 一次性塑料手套 乳胶手套 丁腈手套',tip:'Put used disposable gloves in a clear garbage bag.',note:'Gloves are not plastic packaging. Markham’s guide lists plastic gloves as garbage.'},
{id:'woodcutlery',name:'Wooden or bamboo cutlery',zh:'木质 / 竹制餐具',bin:'garbage',emoji:'🥢',tags:'wood wooden bamboo chopsticks cutlery stirring stir sticks fork spoon 竹筷 木筷 竹餐具 木餐具 木搅拌棒 筷子',tip:'Put wooden or bamboo cutlery and stir sticks in a clear garbage bag.',note:'Markham’s 2026 guide lists these items as garbage, despite their plant-based material.'},
];
items.push(...extraItems);

const translations={
  bottle:['塑料瓶','矿泉水瓶 饮料瓶 洗发水瓶 塑胶瓶'],banana:['香蕉皮','香蕉 果皮'],can:['金属饮料罐 / 食品罐','易拉罐 铝罐 铁罐 罐头罐'],pizza:['油污披萨盒','油污纸盒 沾油披萨盒 greasy pizza'],coffee:['纸质咖啡杯','纸杯 咖啡纸杯 一次性纸杯'],battery:['家用电池','电池 锂电池 干电池 batteries'],glass:['玻璃瓶 / 玻璃罐','玻璃罐 玻璃瓶 酱料瓶'],napkin:['用过的纸巾 / 厨房纸','纸巾 厨房纸 餐巾纸 卫生纸 tissue tissues'],chips:['零食包装袋','薯片袋 零食袋 糖纸 包装袋 wrappers'],foam:['泡沫包装','泡沫 塑料泡沫 保丽龙'],cardboard:['纸板箱','纸箱 纸盒 纸板 硬纸板'],diaper:['尿布','尿不湿 纸尿裤'],ceramic:['陶瓷杯 / 陶瓷餐具','陶瓷杯 马克杯 瓷杯 陶瓷盘 陶瓷碗'],electronics:['电子设备','手机 电脑 充电器 数据线 电子垃圾'],tea:['茶包 / 咖啡渣','茶叶 茶包 咖啡渣 咖啡滤纸'],plasticbag:['塑料袋 / 包装膜','塑料袋 塑胶袋 保鲜膜 塑料膜 购物袋']
};
for(const item of items){const translation=translations[item.id];if(translation){item.zh=translation[0];item.tags+=' '+translation[1]} }

function normalize(text){return String(text).normalize('NFKC').toLowerCase().replace(/[’']/g,'').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim()}
const stopWords=new Set(['a','an','the','of','for','my','this','that','used','empty','item','photo','picture']);
function tokens(text){return normalize(text).split(' ').filter(word=>word&&!stopWords.has(word)).map(word=>word.length>3&&word.endsWith('s')&&!word.endsWith('ss')?word.slice(0,-1):word)}
function oneEdit(a,b){
  if(Math.abs(a.length-b.length)>1)return false;
  if(a===b)return true;
  if(a.length===b.length){const differences=[];for(let index=0;index<a.length;index++)if(a[index]!==b[index])differences.push(index);if(differences.length===2&&differences[1]===differences[0]+1&&a[differences[0]]===b[differences[1]]&&a[differences[1]]===b[differences[0]])return true;}
  let edits=0,i=0,j=0;
  while(i<a.length&&j<b.length){if(a[i]===b[j]){i++;j++;continue}if(++edits>1)return false;if(a.length>=b.length)i++;if(b.length>=a.length)j++}
  return edits+(i<a.length||j<b.length?1:0)<=1;
}

export function findItems(query){
  const normalized=normalize(query);const words=tokens(query);
  if(!normalized||!words.length)return [];
  return items.map(item=>{
    const name=normalize(item.name);const text=normalize(item.name+' '+item.zh+' '+item.tags);
    const keywords=tokens(text);
    let score=0;
    for(const word of words){
      if(text.includes(word)){score+=keywords.includes(word)?5:3;continue}
      // Typo correction applies to English only and never drops unmatched words.
      if(/^[a-z]{4,}$/.test(word)&&keywords.some(key=>oneEdit(word,key))){score+=1;continue}
      return {item,score:0};
    }
    if(name===normalized||item.zh===query.trim())score+=20;
    if(name.includes(normalized))score+=6;
    return {item,score};
  }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.item);
}
