let h1 = document.querySelector("h1");
h1.style.letterSpacing = "10px";
h1.style.textAlign = "center";
h1.style.padding = "2px";
//
let count = document.querySelector("#country");
count.textContent += `${countries.length}`;
count.style.textAlign = "center";
count.style.marginTop = "1pc";
//
let h3 = document.createElement("h3");
h3.textContent = "30 Days of Javascript Dom-Day2";
h3.style.textAlign = "center";
h3.style.fontSize = "15px";
h3.style.fontWeight = "400";
document.body.appendChild(h3);
// TABLE
let table = document.createElement("table");
table.style.textAlign = "center";

let countryCount = 0;
while (countryCount < countries.length) {
  let row = document.createElement("tr");
  table.style.textAlign = "center";
  table.style.width = "75%";
  table.style.marginLeft = "10%";
  table.style.letterSpacing = "1px";

  for (let i = 0; i < 6; i++) {
    if (countryCount == countries.length) break;
    let data = document.createElement("td");
    data.textContent = countries[countryCount].toUpperCase();
    data.style.paddingTop = "30px";
    data.style.paddingBottom = "30px";
    data.style.border = "20px #e4e245 solid";

    row.appendChild(data);
    countryCount++;
  }
  table.appendChild(row);
}
document.body.appendChild(table);
