"use strict";

// let temp = 40;

// if (temp < 30) {
//     console.log("I would like to go Goa");
// } else {
//     console.log("i would like to do javascript parctice at home");
// }

// 1.  Question  //

// let time = 12;  // PM

// if (time > 13 ) {
//     console.log("Good Afternoon");
// } else if (time <= 12 && time > 16  ) {
//     console.log("Good Evening");
// } else {
//     console.log("Good Morning");
// }

// 2.  Question //

// let age = 30;
// let citizen = true
// let registeredVoter = true;
// if (age >= 18 && citizen == true && registeredVoter == true)   {
//     console.log("Eligible to vote");
// } else if (age > 18 != citizen && !registeredVoter) {
//  console.log("Not Eligible to vote");
// } else (age <=18 && !citizen )
// console.log("Due to citizenship status");

// Requitement  3:14:24

// let user = 19;
// let isCitizen = true;
// let isVoterregistered = false;

// if ((user) => 18) {
//   if (isCitizen) {
//     if (isVoterregistered) {
//       console.log("Your are eligibe to vote");
//     } else {
//       console.log("Your are not a member of registered voter group ");
//     }
//   } else {
//     console.log("You are not citenzeship of our country");
//   }
// } else {
//   console.log("Your are not eligible to vote (Younger)");
// }

// Write programm s given Number is even or odd

// let num = 11;

// if (num % 2  == 0) {
//     console.log("num is even");
// } else {
//     console.log("num is odd");
// }

// Write a program given numb is positive , negative or zero

// const digit = 10;

// if (digit === 0) {
//     console.log("digit is zero");
// } else if (digit > 0) {
// console.log("digit is postive");
// } else {
//     console.log("digit is negative");
// }

// let userEmailid = "Mahesh@gmail.com";

// if(userEmailid) {
//     console.log("Logged in with user email");
// } else{
//     console.log("Dont have user email id");
// }

// let userProfiledata = [];
// if (userProfiledata.length === 0 ) {
//     console.log("Array is empyty");
// }

// let empObject = {}
// if (Object.keys(empObject).length === 0) {
//     console.log("Array is empyty");
// }

// Falsey Values

// false ,  0 , -0, BigInt 0n, "" , null , undefined , NaN etc...

// Truthy values

// "0" , "fasle" , " " , [] , {} , function(){} etc...

// **********  Nullish coalesing operator  ??  *********** //

let val1;
//val1 = 10 ?? 15;
//val1  = null ?? 15;
//val1 =  undefined ?? 10;
// console.log(val1);

// ****************** Trernary Operator  ********* //////////

// const iceTeaPrice = 100;
// iceTeaPrice <80 ? console.log("less than 80"): console.log("greater than 80");

// Print Prime Number **** //

// let num = 11;
// let prime = true;
// for ( let i = 0; i < num; i++) {
//     if (num % 2 == 0) {
//         prime = false;
//         break;
//     }
// }

// if (prime) {
//     console.log("Prime number");
// } else {
//     console.log("not prime number");
// }

// let count = 9;
// let isPrime = true;
// for (let i = 0; i < count; i++) {
//    if (count % 2 ==0) {
//     isPrime = false;
//     break;
//    }
// }

// if (isPrime) {
//     console.log("Prime Number");
// } else {
//     console.log("Not Prime Number");
// }

// let inputNumber = 12;
// let isPrime = true;

// for (let index = 0; index < 12; index++) {
//   if (inputNumber % 2 == 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("prime number");
// } else {
//   console.log("Not Prime");
// }



// let num = 5;
// for ( let i = 1 ; i < 11; i++ ) {
//     console.log(` 5 * ${i}  ${i * 5}   ` );
// }


// Leap Year 

// let year = 2024;

// if (year %  4 === 0 && year % 100 != 0 && year % 400 !== 0 ) {
//     console.log("Leap year");
// } else {
//     console.log("Not leap year");
// }








// Print a Pattern logice 

for ( let  i = 1 ; i <=10 ; i++ ) { 
    let pattern = "";
    for ( let j = 1; j <=i ; j++ ) {
        pattern = pattern + " *"; 
        
    } console.log(pattern);  
}






  

