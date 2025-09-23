//  Color change of Year.
let colorUsed = ["red", "blue", "green", "purple", "lime", "orange", "brown"];
const yearColor = document.querySelector(".year");
let index = 0;

yearColor.style.fontSize = " 100px";
yearColor.style.display = "flex";
yearColor.style.justifyContent = "center";
yearColor.style.alignItems = "center";
yearColor.style.textAlign = "center";

setInterval(() => {
    yearColor.style.color = colorUsed[index];
    index = (index + 1) % colorUsed.length;
}, 1000);


// About Heading(heading1). 
let headers = document.querySelectorAll(".center");
headers.forEach(header => {
    header.style.display = "flex";
    header.style.justifyContent = "center";
    header.style.alignItems = "center";
    header.style.textAlign = "center";
    header.style.fontSize = "35px";
});


// About Heading(heading2). 
let head = document.querySelector("h2");
head.style.textDecoration = "underline"
head.style.display = "flex";
head.style.justifyContent = "center";
head.style.alignItems = "center";
head.style.textAlign = "center";
head.style.fontWeight = "bolder";


// Addition of Current Time & Current Year.
function clockUpdate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const dateString = `${month}, ${day} ${year}`;
    const timeString = `${hours}:${minutes}:${seconds}`;
    let color = ["blue", "red", "green", "purple", "lime", "orange", "brown", "magenta"];
    const dateTimeColor = document.getElementById('dateTime');
    dateTimeColor.textContent = ` ${dateString} ||  ${timeString}`;
    dateTimeColor.style.backgroundColor = color[index];
    index = (index + 1) % color.length;
}
setInterval(clockUpdate, 1000);
clockUpdate();
const time = document.querySelector("#dateTime");
time.style.display = "flex";
time.style.justifyContent = "center";
time.style.alignItems = "center";
time.style.fontSize = "15px";
time.style.width = "300px";
time.style.margin = "auto";
time.style.color = "white";
time.style.fontWeight = "bold";


// Modificaton of Courses with color.
let lists = document.querySelectorAll(".course");
for (let i = 0; i < lists.length; i++) {
    lists[i].style.listStyle = "none";
    lists[i].style.height = "50px";
    lists[i].style.width = "800px";
    lists[i].style.border = "2px solid white";
    lists[i].style.margin = "1px auto";
    lists[i].style.fontSize = "25px";
    lists[i].style.textAlign = "center";
    lists[i].style.alignContent = "center";
    lists[0].style.backgroundColor = "#10d72eff";
    lists[1].style.backgroundColor = "#f1f111ff";
    for (let i = 2; i < lists.length; i++) {
        lists[i].style.backgroundColor = "#f6230cff";
    }
}


// Resize of Image(Logo).
const logo = document.querySelector(".logo");
logo.style.display = "flex";
logo.style.alignItems = "center";
logo.style.justifyContent = "center";
logo.style.gap = "5px";
const images = document.querySelectorAll(".logo img");
images.forEach(image => {
    image.style.height = "30px";
    image.style.width = "30px";
});


//  Paragraph  Modification.
let paras = document.querySelector("p");
paras.style.textAlign = "center";
paras.style.width = "700px";
paras.style.margin = "10px auto";
paras.style.fontSize = "20px";


// About Title Skills Qualification.
let foot = document.querySelector(".foot");
foot.style.display = "flex";
foot.style.justifyContent = "space-around";
foot.style.textAlign = "left";
foot.style.listStyle = "none";
foot.style.width = "800px";
foot.style.margin = "50px auto";
foot.style.fontSize = "20px";
let footlist = foot.querySelectorAll("ul");
footlist.forEach(list => {
    list.style.listStyle = "none";
    list.style.padding = "0";
    list.style.margin = "0";
});


// KeyWords and It's Properties 
const keywords = [
    "#HTML", "#HTML5", "#CSS", "#CSS3", "#JS", "#JavaScript", "#ES6", "#Promise",
    "#async await", "#Database", "#React", "#React Hooks", "#Context API",
    "#React Router", "#Redux", "#Node", "#MongoDB", "#SQL", "#API", "#DOM",
    "#data science", "#MERN", "#Python", "#Flask", "#Statistics", "#Linear Algebra",
    "#Numpy", "#Pandas", "#Scipy", "#Scikit-learn", "#Visualization", "#D3.js"
];

let colors = ["aqua", "gold", "pink", "maroon", "lime", "chocolate"];

let footer = document.querySelector("#keywords");
footer.style.display = "flex";
footer.style.flexWrap = "wrap";
footer.style.alignItems = "center";
footer.style.justifyContent = "flex-start";
footer.style.padding = " 10px";
footer.style.width = "800px";
footer.style.margin = "10px auto";


keywords.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.className = "keyword";
    span.style.background = colors[index % colors.length];
    span.style.display = "inline-block";
    span.style.alignItems = "center";
    span.style.justifyContent = "center";
    span.style.padding = "5px 10px";
    span.style.margin = " 5px";
    span.style.height = " 30px";
    span.style.gap = " 30px";
    span.style.lineHeight = " 20px";
    span.style.borderRadius = " 17px";
    span.style.fontSize = " 15px";
    footer.appendChild(span);

});

let h3 = document.querySelector("h3");
h3.style.display = "flex";
h3.style.textAlign = "left";
h3.style.justifyContent = "flex-start";
h3.style.alignItems = "center";
h3.style.width = "800px";
h3.style.margin = "10px  auto ";
h3.style.fontWeight = "bolder";