let h1 = document.createElement("h1");
h1.innerHTML = "Number Generator";
document.body.appendChild(h1);
h1.style.textAlign = "center";
//
let h2 = document.createElement("h2");
h2.innerHTML = "30DaysOfJavaScript : DOM Day3 ";
document.body.appendChild(h2);
h2.style.fontWeight = "300";
h2.style.textDecoration = "underline";
h2.style.border = "1px solid green";
h2.style.width = "20%";
h2.style.textAlign = "center";
h2.style.backgroundColor = "pink";
h2.style.margin = "auto";
// isPrime
let isPrime = (num) => {
  if (num == 1 || num == 0) return false;
  if (num == 2 || num == 3) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};
//
let container = document.createElement("div");
let table = document.createElement("table");
let nums = 0;
function onload(numCount) {
  nums = 0;
  while (nums < numCount) {
    // create table row
    let row = document.createElement("tr");

    let x = 1;
    let iterationCount = numCount - nums > 6 ? 6 : numCount - nums;
    while (x <= iterationCount) {
      // for (let x = 1; x <= 6; x++) {
      // create table data
      let data = document.createElement("td");
      data.textContent = nums;

      // style the data element
      data.style.margin = "2px";
      data.style.padding = "5px";
      data.style.height = "48px";

      // selective styling
      if (isPrime(nums)) {
        data.style.backgroundColor = "#f76262";
      } else if (nums % 2 !== 0) {
        data.style.backgroundColor = "#fee904";
      } else data.style.backgroundColor = "#42b845";

      // end styling
      row.appendChild(data);
      nums++;
      x++;
    }
    // add row to the table
    table.appendChild(row);
  }
}
//div(input ve button)
let satır = document.createElement("div");

let input = document.createElement("input");
input.type = "text";
input.style.width = "30pc";
input.style.length = "30pc";
input.style.marginTop = "1pc";
input.style.marginLeft = "40pc";
input.placeholder = "Generate Numbers";
input.style.border = "1px solid green";

let btn1 = document.createElement("button");
btn1.textContent = "Generate Numbers";

satır.appendChild(input);
satır.appendChild(btn1);
document.body.appendChild(satır);

let p = document.createElement("p");
input.addEventListener("keypress", (key) => {
  let val = parseInt(input.value);
  if (val < 0 || val > 1000) {
    p.textContent = "Please enter a number between 1-1000!";
  } else p.textContent = "";
});
p.textAlign = "center";
satır.appendChild(p);

btn1.addEventListener("click", () => {
  let inputValue = parseInt(input.value);

  if (inputValue > 1000 || inputValue < 0) {
    p.textContent = "Enter a valid number between 1 and 1000.";
  } else onload(inputValue);
});

// Style
table.style.width = "60%";
table.style.margin = "auto";
table.style.marginTop = "1pc";
table.style.height = "120px";
table.style.textAlign = "center";
table.style.height = "120px !important";

//
container.appendChild(table);
document.body.appendChild(container);
//
