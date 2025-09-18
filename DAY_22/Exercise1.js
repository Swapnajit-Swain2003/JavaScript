// Q1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.

let div = document.querySelector("#container");
div.style.display = "grid";
div.style.gridTemplateColumns = "repeat(6, 1fr)";
div.style.gap = "2px";
div.style.margin = "50px 200px";

function isPrime(n) {
    if (n <= 1) return false;
    for (let j = 2; j <= Math.sqrt(n); j++) {
        if (n % j === 0) return false;
    }
    return true;
}


for (let i = 0; i <= 101; i++) {
    const number = document.createElement("div");
    number.textContent = i;
    div.appendChild(number)
    number.style.border = "1px solid azure";
    number.style.color = "#FFFFFF";
    number.style.display = "grid";
    number.style.textAlign = "center";
    number.style.alignItems = "center";
    number.style.justifyContent = "center";
    number.style.height = "80px"
    number.style.fontWeight = "bolder"


    let isPrime = true;
    if (i <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        number.style.backgroundColor = "#FF0000";
    } else if (i % 2 === 0) {
        number.style.backgroundColor = "#00FF00"
    } else {
        number.style.backgroundColor = "#ffee00fa"
    }
}

let head = document.querySelector("#h1")
head.style.display = "grid";
head.style.textAlign = "center";
head.style.justifyContent = "center";
head.style.alignItems = "center";


//  Headin Tags
let headings = document.querySelectorAll(".heading");
for (let i = 0; i < headings.length; i++) {
    headings[i].style.display = "grid"
    headings[i].style.textAlign = "center";
    headings[i].style.justifyContent = "center";
    headings[i].style.alignItems = "center";
    headings[i].style.textDecoration = "underline";
}


