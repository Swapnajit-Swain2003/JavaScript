//  Generating numbers and marking evens, odds and prime numbers with three different colors.


// Body
let body = document.querySelector("body");
body.style.textAlign = "center";
body.style.margin = "0";
body.style.padding = "0";


// Heading
let head = document.querySelector("h1");
head.style.color = "#14cd14ff";
head.style.fontSize = "50px";


// Input Field
let input = document.querySelector("#number");
input.style.width = "180px";
input.style.padding = "10px";
input.style.fontSize = "15px";
input.style.fontWeight = "bld";
input.style.borderRadius = "10px";
input.style.border = "2px solid #000000";


// Button
let button = document.querySelector("#generate");
button.style.backgroundColor = "#14cd14ff";
button.style.color = "#e5e3e3ff";
button.style.padding = "10px";
button.style.margin = "10px";
button.style.borderRadius = "10px";
button.style.fontSize = "15px";
button.style.fontWeight = "bold";
button.style.border = "2px solid #080707ff";



// Container(Div)
let container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.justifyContent = "flex-start";


// Prime Number Check
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}



// Generate Number For Given Range
function generateNumber() {
    container.innerHTML = "";
    const limit = parseInt(input.value);

    for (let i = 0; i <= limit; i++) {
        let box = document.createElement("div");
        box.textContent = i;
        box.style.width = "100px";
        box.style.height = "70px";
        box.style.margin = "15px";
        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.borderRadius = "15px";
        box.style.fontWeight = "bold";
        box.style.fontSize = "17px";
        box.style.color = "#ffffff";


        // Different Background Color for Prime,Even & Odd Number.
        if (isPrime(i)) {
            box.style.backgroundColor = "#cb0e0eff";
        } else if (i % 2 === 0) {
            box.style.backgroundColor = "#14cd14ff"
        } else {
            box.style.backgroundColor = "#c4b709fa"
        }
        container.appendChild(box)
    }
}

button.addEventListener("click", generateNumber);