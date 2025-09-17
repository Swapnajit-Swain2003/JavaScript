// Q1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.


document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

//  The year color is changing every 1 second.

let color = ["red", "blue", "green", "purple", "lime", "orange","brown"];
const yearColor = document.querySelector(".year");
let index = 0;
yearColor.style.fontSize = " 50px"
setInterval(() => {
  yearColor.style.color = color[index];
  index = (index + 1) % color.length;
}, 1000);

//  The date and time background color is changing every on seconds.
function updateClock() {
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
  let color = ["blue","red", "green", "purple", "lime", "orange","brown","magenta"];
  const dateTimeColor =  document.getElementById('dateTime');
  dateTimeColor.textContent = ` ${dateString} ||  ${timeString}`;
  dateTimeColor.style.backgroundColor = color[index];
  index = (index + 1 ) % color.length;
}
setInterval(updateClock, 1000);
updateClock();
let time = document.querySelector("#dateTime");
time.style.display = "flex";
time.style.justifyContent = "center";
time.style.alignItems = "center";
time.style.fontSize = "15px";  
time.style.width = "300px";        
time.style.margin = "auto";

let head1 = document.querySelector("h1");
head1.style.display = "flex";
head1.style.justifyContent = "center";
head1.style.alignItems = "center";

let head2 = document.querySelector("h2");
head2.style.display = "flex";
head2.style.justifyContent = "center";
head2.style.alignItems = "center";
head2.style.textDecoration = "underline";

/* 
Completed challenge has background green
Ongoing challenge has background yellow
Coming challenges have background red */

let lists = document.querySelectorAll("li");

for(let i = 0; i < lists.length; i++) {
    lists[i].style.width = "600px";
    lists[i].style.height = "50px";
    lists[i].style.margin = "5px";
    lists[i].style.textAlign = "center";
    lists[i].style.alignContent = "center";
    lists[i].style.listStyleType = "none";
    if(i === 0) {
       lists[i].style.background = 'green';
    } else if(i === 1) {
        lists[i].style.background = 'yellow';
    } else {
        lists[i].style.background = 'red';
    }
}