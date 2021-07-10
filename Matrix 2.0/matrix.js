let c = document.getElementById("c");
let ctx = c.getContext("2d");
c.height = window.innerHeight; 
c.width = window.innerWidth;
//let mass = "1234567890_ !№;%:?*()_+!@#$%^&*)(?/ABBULE`;PBQRKVYJGHCVNEAXWXIO]SM☉ ♂ ♁ ♀ ☿ ♃ ♄ ♅ ♆ ♇";
let mass = "牡マ✓ ⎷ √キグナルフ系路克瑞大市立鎰命科ャマ能力ϒ人要望り玉宏¥丹谷Ѫ灯影伝鶐〩通学阪は妻スティ☻㋛ᄬ⍨⌤ソッヅツゾシジ⊖⊘⊙ت ټ 〠凡♪♫♬☊方 日 广 廾 几 卪 尸 尺 干 朮 爪 父 牙";
//let mass = " X У Й ";
//let mass = "ПРИВЕТ ДОЛБАЁБ!";
//let mass = "съешь ещё этих мягких французских булок, да выпей чаю";
  mass = mass.split("");

  let font_size = 11;

  let columns = c.width/font_size;

let drops = [];

for (let x = 0; x < columns; x++) 


drops[x] = 1;

function draw() {

  ctx.fillStyle = "rgba(0,0,0,0.05)";
//ctx.fillStyle = "rgba(75,0,130,0.05";



ctx.fillRect(0, 0, c.width, c.height);

ctx.fillStyle = "#7CFC00";

ctx.font = font_size + "px arial";

for (var i = 0; i < drops.length; i++)
{

let text = mass [Math.floor(Math.random()*mass.length)];

ctx.fillText(text,i*font_size,drops[i]*font_size);

if(drops[i]*font_size > c.height && Math.random() > 0.960)

drops[i] = 0;

drops[i]++;

}
}

setInterval(draw, 25)

