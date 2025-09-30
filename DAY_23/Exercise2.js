// Generating the keyboard code code using even listener.

// Body
const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.textAlign = "center";
body.style.backgroundColor = "#f0f0f0";
body.style.height = "500px";
body.style.padding = "10px";
body.style.margin = "200px";
body.style.gap = "30px";


// Input (Div)
const input = document.querySelector("#input");
input.style.padding = "20px";
input.style.width = "520px";
input.style.borderRadius = "10px";
input.style.backgroundColor = "white";
input.style.color = "black";
input.style.border = "1px solid #f0f0f0";
input.style.textAlign = "center";
input.style.fontSize = "50px";
input.style.userSelect = "none";


// Output (Div)
const output = document.querySelector("#output");
output.style.height = "100px";
output.style.width = "120px";
output.style.padding = "30px";
output.style.margin = "30px";
output.style.borderRadius = "10px";
output.style.backgroundColor = "#ffffff";
output.style.color = "#196d19ff";
output.style.alignItems = "center";
output.style.fontSize = "90px";
output.style.userSelect = "none";


// Generation. of keyboard code
document.addEventListener('keydown', function (event) {
    input.innerHTML = ` You Pressed  <span style=" color:#196d19ff"> ${event.key} </span>`;
    output.innerHTML = event.keyCode;
});

