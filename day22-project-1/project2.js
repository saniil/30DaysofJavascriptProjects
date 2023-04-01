let h1 = document.createElement('h1');
h1.innerHTML = 'Number Generator'
document.body.appendChild(h1)
h1.style.textAlign = "center"
//
let h2 = document.createElement('h2');
h2.innerHTML = '30DaysOfJavaScript : DOM Day2 '
document.body.appendChild(h2)
h2.style.fontWeight = "300";
h2.style.textDecoration = "underline";
h2.style.border = "1px solid black"
h2.style.width = "20%";
h2.style.textAlign = "center"
h2.style.backgroundColor = "pink"
h2.style.margin = "auto";
// isPrime
let isPrime = num => {
    if (num == 1 || num == 0) return false;
    if (num == 2 || num == 3)
      return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }
//
let container = document.createElement('div');
let table = document.createElement('table');



let nums = 0;
while (nums <= 101) {
  // create table row     
  let row = document.createElement('tr');

  for (let x = 1; x <= 6; x++) {
    // create table data   
    let data = document.createElement('td');
    data.textContent = nums;

    // style the data element     
    data.style.margin = '2px';
    data.style.padding = '5px';
    data.style.height = "48px"


    // selective styling    
    if (isPrime(nums)) {
      data.style.backgroundColor = '#f76262';
    } else if (nums % 2 !== 0) {
      data.style.backgroundColor = '#fee904';
    } else data.style.backgroundColor = '#42b845';

    // end styling   
    row.appendChild(data);
    nums++;
  }
  // add row to the table    
  table.appendChild(row);
}

// Style
table.style.width = '60%';
table.style.margin = "auto";
table.style.marginTop = '1pc';
table.style.height = "120px";
table.style.textAlign = 'center'
table.style.height = "120px !important";






//
container.appendChild(table);
document.body.appendChild(container);

//







