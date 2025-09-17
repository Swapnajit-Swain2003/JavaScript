//   --------  EXERCISE LEVEL - 1 ----------

// Q1.Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name.

let paras = document.querySelector("p");
console.log(paras);
console.log(paras.textContent);

// Q2.Get each of the the paragraph using document.querySelector('#id') and by their id.

let id1 = document.querySelector("#id1");
let id2 = document.querySelector("#id2");
let id3 = document.querySelector("#id3");
let id4 = document.querySelector("#id4");
console.log(id1);
console.log(id2);
console.log(id3);
console.log(id4);

// Q3.Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
 
let nodeList =  document.querySelectorAll("p");
console.log(nodeList);

// Q4.Loop through the nodeList and get the text content of each paragraph

for (let i = 0; i < nodeList.length; i++) {
    console.log(nodeList[i].textContent);
}
console.log(" ");

// Q5. Set a text content to paragraph the fourth paragraph, Fourth Paragraph.

if(nodeList.length === 4) {
     console.log(nodeList[3].textContent = "Fourth Paragraph"); 
 }

//  Q6.Set id and class attribute for all the paragraphs using different attribute setting methods.

for (let index = 0; index < nodeList.length; index++) {
    nodeList[index].setAttribute("id", `para-${index + 1}`);
    nodeList[index].setAttribute("class", "myClass");
}


//   --------  EXERCISE LEVEL - 2 ----------

// Q1.Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)

 
for(let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.fontSize = '30px';
  nodeList[i].style.background = '#d9eaeaff';
  nodeList[i].style.color = 'blue';

}

// Q2.Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color.
 
for(let i = 0; i < nodeList.length; i++) {
 if (i % 2 === 0) {
    nodeList[i].style.color = 'green'
  } else {
    nodeList[i].style.color = 'red'
  }
}
  
// Q3.Set text content, id and class to each paragraph
