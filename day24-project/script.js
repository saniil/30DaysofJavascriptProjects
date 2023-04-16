let baslık = document.querySelector("#baslık");
baslık.style.textAlign = "center";
baslık.style.color = "white";

let mass = document.querySelector("#mass");
mass.style.width = "10pc";
mass.style.marginLeft = "47pc";
mass.style.marginTop = "2pc";

let main = document.querySelector("#main");
main.style.textAlign = "center  ";
main.style.marginTop = "4pc";

document.body.style.backgroundImage = "url('./images/galaxy.gif')";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";


let img = document.querySelector('#img')
let mesaj = document.createElement('h2')
let uyarı = document.createElement("h2");

//button
let button = document.querySelector("#button");
button.addEventListener("click", (e) => {
  if (mass.value === "") {
    uyarı.innerHTML = "boş bıraktınız";
    uyarı.style.color = "red";
    uyarı.style.position = "absolute";
    uyarı.style.top = "8pc";
    uyarı.style.left = "55pc";
    document.body.appendChild(uyarı);
  } else {
    let select = document.querySelector("#sec");
    // image değiştirmek
    const selectedOption = select.selectedOptions[0].innerHTML;
    img.src = `./images/${selectedOption}.png`
    img.style.marginRight = '40pc'
    // kilo hesapla
    const kg =mass.value
    const g = select.value
    const weight = (g*kg)
    mesaj.innerHTML = `The weight of the object on ${selectedOption} is ${weight}N`
    mesaj.style.color= 'white'
    mesaj.style.position = 'absolute'
    mesaj.style.top = "20pc";
    mesaj.style.left = "61pc";
    mesaj.style.border = '1px solid white'
    mesaj.style.padding = '10px'
    document.body.appendChild(mesaj)
    uyarı.innerHTML = ''

  }
});
