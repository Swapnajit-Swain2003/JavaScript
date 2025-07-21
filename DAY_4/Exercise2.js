// Q1. Write a code which can give grades to students according to theirs scores:
/*80-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F 
*/
let Score = Number (prompt("Enter your Score:"));
if(Score >= 90 && Score <= 100) {
    console.log("Grade A");
} else if(Score >= 70 && Score < 90) {
    console.log("Grade B");
} else if(Score >= 60 && Score < 70) {
    console.log("Grade C");
} else if(Score >= 50 && Score < 60) {
    console.log("Grade D");
} else if(Score >= 0 && Score < 50) {
    console.log("Grade F");
} else{
    console.log("Enter a valid Score.");
}

// Q2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is
/* 
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer 
*/

let monthUserInput = prompt("Enter the Month:");
let month = monthUserInput.toLowerCase();
let season;
if (["september", "october", "november"].includes(month)) {
  season = "Autumn";
} else if (["december", "january", "february"].includes(month)) {
  season = "Winter";
} else if (["march", "april", "may"].includes(month)) {
  season = "Spring";
} else if (["june", "july", "august"].includes(month)) {
  season = "Summer";
} else {
  season = "Invalid month";
}
console.log(season);

// Q3. Check if a day is weekend day or a working day. Your script will take day as an input.
/*    
What is the day  today? Saturday
Saturday is a weekend.

What is the day today? saturDaY
Saturday is a weekend.

What is the day today? Friday
Friday is a working day.

What is the day today? FrIDAy
Friday is a working day.
*/    
let dayUserInput = prompt("Enter  a Day:");
let day = dayUserInput.toLowerCase();
switch(day) {
    case 'monday':
        console.log("Monday is a working day.");
        break;
    case 'tuesday':
        console.log("Tuesday is a working day.");    
        break;
    case 'wednesday':
        console.log("Wednesday is a working day.");    
        break;
    case 'thursday':
        console.log("Thursday is a working day.");    
        break;
    case 'friday':
        console.log("Friday is a working day.");    
        break;
    case 'saturday':
        console.log("Saturday is a weekend.");    
        break;
    case 'sunday':
        console.log("Sunday is a weekend.");    
        break; 
    default:
        console.log("Enter a valid day.");                   
}