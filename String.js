"use strict";

// JavaScript String Methods
// JavaScript strings are the sequence of characters

// ** String length property 


// let str = "Hello. world!";
// console.log(str.length);


// ** Single Quoate vs double Quoate


let doubleQuoate = "My Name is \'John Smith'\  &\ni am \"full stack \" developer"
//console.log(doubleQuoate);


let singleQuoate = 'My Name is "John Smith" & i am full stack developer'
//console.log(singleQuoate);




// let text = "Mahesh Mittha";
// let result = text.indexOf("mittha")
// //console.log(result);

// let str = "Train Departed";
// let resultOne = str.indexOf("Departed")
// // console.log(resultOne);


// let str =  "Web Application";
// let srtArr = Array.from(str);
// let strMap = srtArr.map((currElem , index)=>  
//     ` ${currElem} - ${index}`); 
// console.log(strMap); 



// ******  String Index of and last index of 

//let str = "Hello javascript, welcome to our world best javascript cource";

//let index = str.indexOf("p")
//let index = str.indexOf("w")
//let index = str.lastIndexOf("cource")
// let index = str.lastIndexOf("javascript");
// let index = str.indexOf("javascript");
// console.log(index);


// ****** Search Method 


// let str = "Hello javascript, welcome to our world best javascript cource";
// let result = str.search(/javascript/i); // Regex = Regular expression and i = not case sensitive
// console.log(result);


/// ******* Match Methods


// const myMatchMaking = function matchString () {
//     let str = "shadidotcom";
//     let matches = str.match(/dot/g)
//     console.log(matches);
// }

// myMatchMaking();



// let str = "Hello javascript, welcome to our world best javascript cource";
//let result = str.match("JavaScript")
// let result = str.match(/javascript/gi)
// console.log(result);



/// ******* Match All Methods


// let match = "web development";
// let matches = match.matchAll(/web/g);
// console.log(...matches);


let str = "Hello javaScript, welcome to our world best javaScript cource";
let matchResult = str.matchAll("javaScript")
// console.log(...matchResult); 

// **** Approach 1 
// for ( let iteam of matchResult) {
//     console.log(iteam[0]);
// }

// **** Approach 2 
// for ( let index of matchResult) {
//     console.log(index.index);
// }


// **** Approach 3 
// for (let {index} of matchResult) { 
//     console.log(index);
// }



















// const extarctMatched = function () {
//     let regex = /geek/g;
//     let str = "Geek, geek, GEEK" ;
//     let matches = str.matchAll(regex)
//     for (let match of matches) {
//         console.log(match[0]);
// } }

// extarctMatched();



// const myAllMatchFunction = function () {
//     let regesx = /e(xam)(ple(\d?))/g;
//     const str = 'example1example2example3';

//     const array = [...str.matchAll(regesx)];

//     console.log(array);
//     console.log(array[0]);
//     console.log(array[1]);
//     console.log(array[2]);

// }

// myAllMatchFunction()








































