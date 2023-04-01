/////////////////////////////////////////////////1
let yearText = document.querySelector("strong");
yearText.style.fontSize = "40px";
let generateColor = () => {
  let alphanums = "0123456789abcdef";

  let colorArr = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 15);
    colorArr.push(alphanums[index]);
  }
  return "#" + colorArr.join("");
};
setInterval(() => {
  yearText.style.color = generateColor();
}, 750);
/////////////////////////////////////////////////2
let getDate = () => {
  let d = new Date();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let monthIndex = d.getMonth();
  let year = d.getFullYear();
  let date = d.getDate();
  let hour = d.getHours();
  let mins = d.getMinutes();

  date = date < 10 ? "0" + date.toString() : date;
  hour = hour < 10 ? "0" + hour.toString() : hour;
  mins = mins < 10 ? "0" + mins.toString() : mins;

  return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
};
const p = document.querySelector("#anl");
p.innerHTML = getDate();
p.style.width = "20%";
p.style.fontWeight = "300";
p.style.fontSize = "35px";
p.style.textAlign = "center";
p.style.padding = "1px";
p.style.margin = "auto";//important:kenar pay
setInterval(() => {
  p.style.backgroundColor = generateColor();
}, 1500);
////////////////////////////////////////////düzen h1 ve h2
let h1 = document.querySelector("h1");
h1.style.fontSize = "30px";
h1.style.fontFamily = "cursive";
h1.style.fontWeight = "300";
h1.style.textAlign = "center";
h1.style.color = "#90EE90";
let h2 = document.querySelector("h2");
h2.style.color = "#123456";
h2.style.textAlign = "center";
h2.style.textDecoration = "underline";
h2.style.marginBottom = "5px";
h2.style.fontFamily = "fangsong";
//////////////////////////////////////////// li lu
let listItems = document.querySelectorAll("li");
for (let item of listItems) {
  item.style.fontWeight = "350";
  item.style.padding = "9px";
  item.style.listStyleType = "none";
  item.style.margin = "auto";
  item.style.marginTop = "5px"

}
for (const item of listItems) {
  
  if (item.textContent.endsWith("Done")) {item.style.backgroundColor = "green";}
  else if (item.textContent.endsWith("Ongoing"))
    item.style.backgroundColor = "yellow";
  else item.style.backgroundColor = "red";

  item.style.fontFamily = "san-serif";
  item.style.fontSize = "25px";
  item.style.width = "40%";
  item.style.textAlign = "center";
  

}
