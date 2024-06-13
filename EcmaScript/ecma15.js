// ************ ES 6 Features *********************  ///////////////////////

// 1. The let keyword
// 2. The const keyword
// 3. Arrow Functions
// 4. Default Parameters
// 5. Template Literals
// 6. Destrucring
// 7. Onject Properties
// 8. Rest Operator
// 9 . Spread Operator

// Let vs const

// var name = "mahesh";

// if(name) {
// var name = "ganesh";
// console.log(name);
// }

// name = "solapur";
// console.log(name);

// 1 Let varibales declaration

// let myName = "rohit";

// if (myName) {
//    let myName = "Ms Dhoni";
//    console.log(myName);
// }

// myName = "virat kohli";
// console.log(myName);

// 2. Const Variables declarations

// const myCity = "pune";

// if(myCity) {
//     const myCity = "mumbai";
// }

// const myCity = "hyderbad";
// console.log(myCity);

// 3. Template Literals

// let myCity = "Hyderbad";
// let myState = "Telangana";
// let myCountry = `${myCity} ${myState}`;
// console.log(`${myCountry}`);

// let age = 30;
// console.log(`i am ${age} years old`);

// let message = `Thus is multiline text
// with the following characters
// and characters in it
// `;
// console.log(message);

// let num = 5;
// for(let num = 1; num <=10; num++) {
//     console.log(` 5 * ${num} =  ${5 * num} `);
// }

// 4. Default Parameters ***************** //

// function sum(a , b) {
//     return a + b;
// }
// console.log(sum(10 , 10));

// 5 . Fat Arrow Function

// const sumOne = (a , b ) => {
//     let result = `The sum of ${a + b}`;
//     console.log(result);
// }
// console.log(sumOne(2, 2));

// let add = (a,b) => console.log(`Adding ${a + b} `);
// add(2, 2);

// let devide = (a,b) => console.log(`Devide ${a % b } even number ` );
// devide(13, 2);

// const calculator =  (num1, num2, operator) => {
//     let result;

//     switch (operator) {
//       case "+":
//         return result = num1 + num2;

//       case "-":
//        return result = num1 - num2;

//        case "*":
//        return result = num1 * num2;

//       case "/":
//         if (num2 === 0) {
//           return "0 value is not allowed";
//         } else {
//           return result = num1 / num2;
//         }

//       default: return "No match operator"

//     }
//   }

//   console.log(calculator(5, 2, "+"));
//   console.log(calculator(10, 5, "-"));
//   console.log(calculator(5, 5, "*"));
//   console.log(calculator(10, 2, "/"));
//   // console.log(calculator(50, 2, "%"));

// let str = "Mahesh Mittha";
// console.log(str.slice(1,8));

// 1. Write a program to reverse the string

// const ReversedString = (str)=> {
//     for(let char= 0; char <= str.length; char++)
//         console.log(str[char]);
// }

// ReversedString("Mahesh Ganesh")

// 2. Write a program to reverse the string

// const isRevers = (str) => {
//     for (let i = 0; i < str.length; i++)
//         console.log(str[i]);
// }

// isRevers("Javascript")

// 3. Write a program to reverse the string

// const isReversString = (str) => {
//     for ( let i = str.length; i >= 0; i--)
//         console.log(str[i]);
// }

// isReversString("Frontend Web Development")

// 4 . Reverse the string

// const myNameStringReverse = (str)=> {
//     for(let i=str.length; i >= 0; i--)
//     console.log(str[i]);
// }

// myNameStringReverse("Mahesh")

// let myNameStringRevers = (str) => {
//     for(let  i = str.length; i >=0 ; i--)
//         console.log(str[i]);
// }
// console.log(myNameStringRevers("Mahesh"));

// const myNumberReverse = (arr)  => {
//     let reverse =[];
// for( let i = arr.length -1; i >= 0 ; i-- )
//     reverse =  reverse + arr[i];
// console.log(reverse);
// }

// myNumberReverse([1,2,3,4,5,6,7,8,9,10])

// const reverseAnyString = (str) => {
//     let reverse =[];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse;
// };

// console.log(reverseAnyString("Mahesh Mittha"));

// const reverseAlphabet = (str) => {
//     let reverse =[];
//     for (let i = str.length -1; i >= 0; i--) {
//         reverse =  reverse + str[i];
//     };
//     return reverse;

// }

// console.log(reverseAlphabet("Mahesh"));

// const reverseWord = (str) => {
// reverse = [];
// for (let  i= str.length-1;  i >=0 ; i--) {
//     reverse = reverse + str[i];
// }
// return reverse;

// }

// console.log(reverseWord("Mahesh"));

// const isPalinDrome = (str) => {
//   reverse = [];
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }

// //   if (str === reverse) {
// //     return true;
// //   } else {
// //     return false;
// //   }
//   return str === reverse ? true : false;

// };

// console.log(isPalinDrome("Mahesh"));
