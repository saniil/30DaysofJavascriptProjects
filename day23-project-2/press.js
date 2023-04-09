// starting page
let ust = document.body.querySelector(".you");
ust.style.textAlign = "center";
ust.style.padding = "5px";
ust.style.fontWeight = "385";
ust.style.margin = "auto";
ust.style.marginTop = "10pc";
ust.style.border = "outset gray";
ust.style.width = "25pc";
//
let alt = document.body.querySelector(".number");
document.body.addEventListener("keypress", (e) => {
  //
  ust.innerHTML = `You pressed <strong>${e.key}</strong>`;
  ust.style.fontWeight = "300";
  ust.style.textAlign = "center";
  ust.style.marginTop = "10pc";
  ust.style.border = "outset gray";
  //
  alt.innerHTML = `${e.keyCode}`;
  alt.style.textAlign = 'center'
  alt.style.color = 'green'
  alt.style.border = "outset gray";
  alt.style.width = "5pc";
  alt.style.marginLeft = '57pc'

  //
  let strong = document.querySelector("strong");
  strong.style.color = "green";
  strong.style.fontWeight = "1000";
  strong.style.fontSize='2pc'
  //
});
//arka plan renk
let btn = document.createElement('input')
btn.type ='color'
btn.addEventListener('input',e=>{
    console.log(e)
    document.body.style.backgroundColor = e.target.value
})
document.body.appendChild(btn)
//