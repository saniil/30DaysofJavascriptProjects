console.log(countries_data);
console.log(countries_data.length);
// background color
document.body.style.backgroundColor = "rgb(238,238,228)";
//style h2
let h2 = document.querySelector("h2");
h2.style.border = "1px outset";
h2.style.padding = "3pc";
h2.style.paddingBottom = "1pc";
h2.style.textAlign = "center";
h2.style.fontSize = "42px";
h2.style.boxSizing = "border-box";
h2.style.letterSpacing = "2px";
h2.style.color = "orange";
//h4
let h4 = document.createElement("h4");
h4.innerHTML = `Currently we have ${countries_data.length} countries`;
h2.appendChild(h4);
//h4 style
h4.style.fontSize = "20px";
h4.style.letterSpacing = "0px";
h4.style.color = "black";
//button style
let pop = document.querySelector(".population");
pop.style.backgroundColor = "orange";
pop.style.marginLeft = "52pc";
pop.style.padding = "10px";
pop.style.border = "1px outset";
pop.style.width = "7pc";
let lang = document.querySelector(".languages");
lang.style.backgroundColor = "orange";
lang.style.padding = "10px";
lang.style.border = "1px outset";
lang.style.width = "7pc";

// Listelemek için gerekli veriler
//mostPopulatedCities
const mostPopulatedCities = countries_data
  .sort((a, b) => b.population - a.population)
  .slice(0, 10);
console.log(mostPopulatedCities);
// most languages
let all = [];
for (country of countries_data) {
  all = all.concat(country.languages);
}

let count = {};
// Benzersiz
let uniqueItems = [...new Set(all)];
// Her bir benzersiz öğenin tekrar sayısını hesapla
for (let i = 0; i < uniqueItems.length; i++) {
  let item = uniqueItems[i];
  let itemCount = all.filter((x) => x === item).length;
  count[item] = itemCount;
}

let arr = Object.entries(count);

arr.sort((a, b) => {
  return b[1] - a[1];
});

let last = arr.slice(0, 10);
console.log(last);

//listelemek
let sa = document.createElement("h4");
sa.innerHTML = "10 most populated countries in the world";
sa.style.textAlign = "center";
document.body.appendChild(sa);

// ul
let first = document.createElement("ul");
for (let index = 0; index < mostPopulatedCities.length; index++) {
  let li = document.createElement("li");
  li.innerHTML = `${mostPopulatedCities[index].name}:${mostPopulatedCities[index].population}`;
  first.appendChild(li);
  //style
  li.style.display = "flex";
  li.style.justifyContent = "space-between;";
  li.style.padding = "8px";
  li.style.width = "66pc";
  li.style.border = "2px solid #ccc";
  li.style.marginLeft = "22pc";
}
// style
first.style.textAlign = "center";
first.style.marginTop = "5pc";
first.style.fontSize = "25px";
first.style.listStyle = "none";
first.style.fontWeight = "bold";
document.body.appendChild(first);

let button2 = document.querySelector(".languages");
button2.addEventListener("click", (e) => {
  sa.remove()
  first.remove()
  
  let info = document.createElement("h4");
  info.innerHTML = "10 most spoken langueages in the world";
  info.className = 'bu'
  info.style.textAlign = "center";
  document.body.appendChild(info);

  let ul = document.createElement("ul");
  for (let index = 0; index < last.length; index++) {
    let li = document.createElement("li");
    li.innerHTML = `${last[index][0]}:${last[index][1]} country`;
    ul.appendChild(li);
    //style
    li.style.display = "flex";
    li.style.justifyContent = "space-between;";
    li.style.padding = "8px";
    li.style.width = "66pc";
    li.style.border = "2px solid #ccc";
    li.style.marginLeft = "22pc";
    document.body.appendChild(ul);
    ul.style.textAlign = "center";
    ul.style.marginTop = "5pc";
    ul.style.fontSize = "25px";
    ul.style.listStyle = "none";
    ul.style.fontWeight = "bold";
  }
});
let button1 = document.querySelector(".population");
button1.addEventListener("click", (e) => {
  sa.remove()
  first.remove()
  let sil = document.querySelector('ul')
  sil.remove()
  let sil2 = document.querySelector('.bu')
  sil2.remove()

  let newinfo = document.createElement("h4");
  newinfo.innerHTML = "10 most populated countries in the world";
  newinfo.className = 'bu2'
  newinfo.style.textAlign = "center";
  document.body.appendChild(newinfo);
  
  // ul
  let second = document.createElement("ul");
  for (let index = 0; index < mostPopulatedCities.length; index++) {
    let li = document.createElement("li");
    li.innerHTML = `${mostPopulatedCities[index].name}:${mostPopulatedCities[index].population}`;
    second.appendChild(li);
    //style
    li.style.display = "flex";
    li.style.justifyContent = "space-between;";
    li.style.padding = "8px";
    li.style.width = "66pc";
    li.style.border = "2px solid #ccc";
    li.style.marginLeft = "22pc";
  }
  // style 
  second.style.textAlign = "center";
  second.style.marginTop = "5pc";
  second.style.fontSize = "25px";
  second.style.listStyle = "none";
  second.style.fontWeight = "bold";
  document.body.appendChild(second);



});
