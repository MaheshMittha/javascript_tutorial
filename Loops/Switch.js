// ************************  JavaScript switch Statement ******************** ///////////////
// JavaScript switch statement provides a way to execute different code blocks based on different conditions.
//It’s an alternative to using multiple if...else if...else statements when you have multiple conditions to check.

// let day = "thursday";

// switch (day) {
//   case "monday":
//     console.log("World tour");
//     break;
//   case "tuesday":
//     console.log("Country tour");
//     break;
//   case "wednesday":
//     console.log("state tour");
//     break;
//   case "thursday":
//     console.log("city tour");
//     break;
//   default:
//     console.log("Stay at home");
//     break;
// }

// Question 03:28:27 Area of shape:

// simple mathematical calculations

let opreation = 50;
let num1 = 100;
let num2 = 50;
let result;

switch (opreation) {
  case (result = num1 + num2):
    console.log(result + " " + " Addition");
    break;

  case (result = num1 - num2):
    console.log(result + " " + "Subtract");
    break;

  case (result = num1 * num2):
    console.log(result + " " + " Multiply");
    break;

  case (result = num1 % num2):
    console.log(result + " " + " Module");
    break;

  default:
    console.log("No result");
    break;
}

// Area of crircle calculation

let areaofShape = "circle";
let a = 10;
let b = 20;
let count;

switch (areaofShape) {
  case "square":
   (count = a * b)
    console.log(count);
    break;

  case "reactangle":
   (count = b * a)
    console.log(count);
    break;
    
 case "circle" :
 var radius = 2;
 result = 3.142 * (radius * radius)  
 console.log(result);   
 break;

  default: console.log("No Shape Found");
    break;
}


