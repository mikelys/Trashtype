// Object names describe appearance. Materials/condition are confirmed separately.
export const recognitionLabels = [
  {id:'bottle', name:'Bottle', zh:'瓶子', query:'bottle', itemIds:['bottle','glass'], prompt:'a bottle, a plastic water bottle or a glass bottle'},
  {id:'cup', name:'Cup or mug', zh:'杯子', query:'cup', itemIds:['coffee','plasticcup','ceramic','drinkingglass'], prompt:'a drinking cup, a takeaway coffee cup or a ceramic mug'},
  {id:'can', name:'Metal can', zh:'金属罐', query:'can', itemIds:['can'], prompt:'an aluminum beverage can or a metal food tin can'},
  {id:'jar', name:'Jar', zh:'罐子', query:'jar', itemIds:['glass','takeout'], prompt:'an empty food jar or a glass jam jar'},
  {id:'box', name:'Cardboard or pizza box', zh:'纸盒 / 披萨盒', query:'cardboard', itemIds:['cardboard','cleanpizza','pizza'], prompt:'a cardboard packaging box, a cereal box or a pizza box'},
  {id:'carton', name:'Drink carton', zh:'饮料纸盒', query:'carton', itemIds:['carton'], prompt:'a milk carton or a juice carton'},
  {id:'bag', name:'Plastic bag or film', zh:'塑料袋 / 包装膜', query:'plastic bag', itemIds:['plasticbag'], prompt:'a plastic shopping bag, a transparent plastic bag or plastic wrapping film'},
  {id:'snack', name:'Snack wrapper', zh:'零食包装袋', query:'snack', itemIds:['chips'], prompt:'a potato chip bag, a candy wrapper or a snack packaging bag'},
  {id:'container', name:'Takeout container', zh:'外卖盒', query:'takeout container', itemIds:['takeout','foam','cardboard'], prompt:'an empty food takeout container, a plastic food tray or a clamshell food box'},
  {id:'foam', name:'Foam packaging', zh:'泡沫包装', query:'foam', itemIds:['foam'], prompt:'white styrofoam packaging or a polystyrene foam food tray'},
  {id:'tub', name:'Yogurt or food tub', zh:'酸奶盒 / 食品塑料盒', query:'yogurt', itemIds:['yogurt','takeout'], prompt:'an empty plastic yogurt pot, an ice cream tub or a margarine container'},
  {id:'paper', name:'Paper or newspaper', zh:'纸张 / 报纸', query:'paper', itemIds:['paper','napkin'], prompt:'sheets of paper, a newspaper or a magazine'},
  {id:'paperbag', name:'Paper bag', zh:'纸袋', query:'paper bag', itemIds:['paperbag'], prompt:'a brown paper grocery bag or a paper takeout bag'},
  {id:'tissue', name:'Tissue or paper towel', zh:'纸巾 / 厨房纸', query:'tissue', itemIds:['napkin'], prompt:'a used paper tissue, a paper napkin or a paper towel'},
  {id:'foil', name:'Aluminum foil or tray', zh:'铝箔 / 铝箔餐盒', query:'foil', itemIds:['foil'], prompt:'a crumpled piece of aluminum foil or an aluminum foil food tray'},
  {id:'tube', name:'Toothpaste or deodorant tube', zh:'牙膏管 / 除臭剂管', query:'tube', itemIds:['tube'], prompt:'a toothpaste tube or a deodorant packaging tube'},
  {id:'lid', name:'Container or cup lid', zh:'盒盖 / 杯盖', query:'lid', itemIds:['lid'], prompt:'a plastic coffee cup lid or a plastic food container lid'},
  {id:'banana', name:'Banana or banana peel', zh:'香蕉 / 香蕉皮', query:'banana', itemIds:['banana'], prompt:'a banana or a discarded banana peel'},
  {id:'food', name:'Food scraps', zh:'食物残渣', query:'food scraps', itemIds:['food'], prompt:'leftover food, fruit peels, vegetable scraps, bread or bones'},
  {id:'eggshell', name:'Eggshells', zh:'鸡蛋壳', query:'eggshell', itemIds:['eggshell'], prompt:'broken egg shells or eggshells'},
  {id:'tea', name:'Tea bag or coffee grounds', zh:'茶包 / 咖啡渣', query:'tea', itemIds:['tea'], prompt:'a used tea bag or used coffee grounds with a paper coffee filter'},
  {id:'battery', name:'Battery', zh:'电池', query:'battery', itemIds:['battery'], prompt:'household batteries, AA batteries or a lithium battery'},
  {id:'electronics', name:'Electronic device', zh:'电子设备', query:'electronics', itemIds:['electronics'], prompt:'a mobile phone, a laptop, a computer, a charger or electronic cables'},
  {id:'diaper', name:'Diaper', zh:'尿布', query:'diaper', itemIds:['diaper'], prompt:'a baby diaper or an adult diaper'},
  {id:'mask', name:'Disposable mask or glove', zh:'一次性口罩 / 手套', query:'mask', itemIds:['mask','glove'], prompt:'a disposable medical face mask or a disposable plastic glove'},
  {id:'cutlery', name:'Wooden or bamboo cutlery', zh:'木质 / 竹制餐具', query:'wooden cutlery', itemIds:['woodcutlery'], prompt:'wooden chopsticks, wooden cutlery or a bamboo stirring stick'},
  {id:'dish', name:'Ceramic plate or bowl', zh:'陶瓷盘 / 碗', query:'ceramic', itemIds:['ceramic'], prompt:'a ceramic plate, a ceramic bowl or broken ceramic dishes'},
  {id:'wastebin', name:'Waste bin', zh:'垃圾桶本身', query:'垃圾桶', itemIds:['metalbin'], prompt:'a household waste bin or trash can, possibly lined with a plastic bag'},
  {id:'unknown-person', prompt:'a person, a face or a hand without a waste item'},
  {id:'unknown-animal', prompt:'a dog, a cat or another animal'},
  {id:'unknown-scene', prompt:'a landscape, a room, furniture or an empty background'},
  {id:'unknown-other', prompt:'clothing, shoes, a toy or another household object'},
];

const descriptions={
  bottle:['a plastic water bottle','a glass bottle','a crushed plastic bottle','a plastic detergent bottle'],
  cup:['a paper coffee cup','a disposable plastic drinking cup','a ceramic coffee mug','a glass drinking cup'],
  can:['an aluminum soda can','a metal food tin can'],
  jar:['a glass food jar','an empty jam jar'],
  box:['a cardboard box','a flattened cardboard box','a cereal box','a pizza box'],
  carton:['a rectangular milk carton','a juice carton with a straw'],
  bag:['a plastic shopping bag','a transparent plastic bag','plastic wrapping film'],
  snack:['a potato chip bag','a candy wrapper','a snack packaging bag'],
  container:['a plastic takeout food container','a clamshell food box','a black plastic food tray'],
  foam:['white styrofoam packaging','a polystyrene foam food tray'],
  tub:['a plastic yogurt pot','an ice cream tub','a margarine container'],
  paper:['sheets of office paper','a newspaper','a magazine'],
  paperbag:['a brown paper shopping bag','a paper takeout bag'],
  tissue:['a used paper tissue','a crumpled paper towel'],
  foil:['crumpled aluminum foil','an aluminum foil food tray'],
  tube:['a toothpaste tube','a deodorant tube'],
  lid:['a plastic bottle cap','a flat plastic food container lid'],
  banana:['a banana','a discarded banana peel'],
  food:['leftover food scraps','fruit and vegetable peels','leftover bread','meat bones'],
  eggshell:['broken egg shells'],tea:['a used tea bag','used coffee grounds in a paper filter'],
  battery:['AA batteries','a lithium battery'],
  electronics:['a mobile phone','a laptop computer','a phone charger','electronic cables'],
  diaper:['a baby diaper'],mask:['a disposable medical face mask','a disposable plastic glove'],
  cutlery:['wooden chopsticks','wooden cutlery','a bamboo stirring stick'],dish:['a ceramic plate','a ceramic bowl','broken ceramic dishes'],
  wastebin:['a stainless steel kitchen trash can','a metal pedal waste bin','a stainless steel garbage can lined with a plastic bag','a metal wastebasket with a plastic liner','a household trash can'],
};

export function labelPrompts(label){return (descriptions[label.id]||[label.prompt]).map(text=>`a photo of ${text}.`)}

export function interpretMatches(matches) {
  const ranked=matches.filter(x=>Number.isFinite(x.score)).sort((a,b)=>b.score-a.score);
  const top=ranked[0];
  if(!top || top.id.startsWith('unknown') || top.similarity < 0.18 || top.score < 0.18) {
    return {name:'', query:'', candidates:[], uncertain:true};
  }
  const label=recognitionLabels.find(x=>x.id===top.id);
  if(!label?.name)return {name:'',query:'',candidates:[],uncertain:true};
  const uncertain=top.score < 0.35 || top.score-(ranked[1]?.score||0) < 0.08;
  const candidates=ranked.filter(x=>x.score>=Math.max(0.08,top.score*0.3)).slice(0,3)
    .map(x=>recognitionLabels.find(label=>label.id===x.id)).filter(x=>x?.name);
  // Scores rank our candidate list; they are not measured accuracy percentages.
  return {name:`${label.zh} · ${label.name}`,query:label.query,candidates,uncertain};
}
