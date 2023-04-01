/////////////////////////////////////////////////1
let wrapper = document.querySelector(".wrapper");
/////////////////////////////////////////////////
let yearText = document.querySelector("strong");
yearText.style.fontSize = "50px";
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
p.style.margin = "auto"; //important:kenar pay
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
let list = document.createElement("ul");
list.style.listStyleType = "none";
list.style.width = "50%";
list.style.margin = "auto";

// let us do it
asabenehChallenges2020.challenges.forEach((x) => {
  let item = document.createElement("li");

  // innerHTML live :)
  // 1
  let titleSpan = document.createElement("span");
  let title = document.createTextNode(x.name);
  titleSpan.appendChild(title);

  // 2
  let dropdown = document.createElement("details");
  let dropdownSpan = document.createElement("span");
  dropdownSpan.style.textAlign = "center";

  // modify detail
  let summary = document.createElement("summary");
  summary.textContent = x.name.split(" ")[x.name.split(" ").length - 1];
  // add the topics
  let maddeler = document.createElement("ul");

  x.topics.forEach((i) => {
    let item = document.createElement("li");
    item.textContent = i;

    maddeler.appendChild(item);

    // styling
    item.style.padding = "5px";
    item.style.width = "90%";
    item.style.marginTop = "4px";
    item.style.marginBottom = "3px";
  });
  // styling
  maddeler.style.width = "100%";
  maddeler.style.listStyleType = "none";

  dropdownSpan.appendChild(dropdown);
  // 3
  let status = document.createTextNode(x.status);
  let statusSpan = document.createElement("span");
  statusSpan.appendChild(status);

  //style
  statusSpan.style.marginLeft = "750px";

  // appends
  item.appendChild(titleSpan);
  dropdown.appendChild(summary);
  dropdown.appendChild(maddeler);
  item.appendChild(dropdownSpan);
  item.appendChild(statusSpan);
  list.appendChild(item);

  // styling
  if (x.status.endsWith("Done")) {
    item.style.backgroundColor = "#2E8B57";
  } else if (x.status.endsWith("Ongoing")) {
    item.style.backgroundColor = "#FFFF99";
  } else {
    item.style.backgroundColor = "#DC143C";
  }

  item.style.border = "1px red solid";
  item.style.padding = "5px";
  item.style.width = "90%";
  item.style.marginTop = "3px";
  item.style.marginBottom = "3px";
});

wrapper.appendChild(list);
////////////////////////////////////alt bölüm
let name = document.createElement("h1");
name.textContent = "Asabeneh Yetayeh";
name.style.color = "#42b845";
name.style.textAlign = "center";

document.body.appendChild(name);
//logolar
let logo1 = document.createElement("img");
logo1.src =
  "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg";
logo1.width = "50";
logo1.height = "50";
document.body.appendChild(logo1);
logo1.style.marginLeft = "870px";
logo1.style.marginTop = "0px";

let logo2 = document.createElement("img");
logo2.src = "https://cdn-icons-png.flaticon.com/512/733/733579.png";
logo2.width = "50";
logo2.height = "50";
document.body.appendChild(logo2);

let logo3 = document.createElement("img");
logo3.src = "https://cdn-icons-png.flaticon.com/512/270/270798.png";
logo3.width = "50";
logo3.height = "50";
document.body.appendChild(logo3);

//// info
let information = document.createElement("h4");
information.textContent = asabenehChallenges2020.author.bio;
document.body.appendChild(information);
console.log(information);
information.style.width = "800px";
information.style.textAlign = "center";
information.style.marginLeft = "510px";

//table
let tablo = document.createElement('table');

tablo.style.width = "45%";
tablo.style.marginLeft = "30%";
tablo.style.letterSpacing = "1px";

//
let row = document.createElement("tr");
let th1 =  document.createElement("th");
th1.innerHTML = "Titles"
row.appendChild(th1)
//
let th2 =  document.createElement("th");
th2.innerHTML = "Skills"
row.appendChild(th2)
//
let th3 =  document.createElement("th");
th3.innerHTML = "Qualifications"
row.appendChild(th3)
tablo.appendChild(row)
document.body.appendChild(tablo)
for (let index = 0; index < 5; index++) {
    let row = document.createElement("tr");
    let td1 =  document.createElement("td");
    td1.style.textAlign = 'center'
    let td2 =  document.createElement("td");
    td2.style.textAlign = 'center'
    let td3 =  document.createElement("td");
    td3.style.textAlign = 'center'

    td1.innerHTML =asabenehChallenges2020.author.titles[index]
    td2.innerHTML =asabenehChallenges2020.author.skills[index]
    td3.innerHTML =asabenehChallenges2020.author.qualifications[index]
    if (td3.innerHTML === "undefined") {
        td3.innerHTML = ''
      }
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)

    tablo.appendChild(row)    
}


//




