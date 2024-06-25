"use strict";

// JavaScript String Methods
// JavaScript strings are the sequence of characters

// ** String length property

// let str = "Hello. world!";
// console.log(str.length);

// ** Single Quoate vs double Quoate

let doubleQuoate = "My Name is 'John Smith'  &\ni am \"full stack \" developer";
//console.log(doubleQuoate);

let singleQuoate = 'My Name is "John Smith" & i am full stack developer';
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

//let str = "Hello javaScript, welcome to our world best javaScript cource";
//let matchResult = str.matchAll("javaScript")
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

// ******* Includes Methods

// let str = "Hello javaScript, welcome to our world best javaScript cource";
// let result = str.includes(/java/gi);
// console.log(result);

// ******* startsWith() Method

// let str = "Hello javaScript, welcome to our world best javaScript cource";
//let result = str.startsWith("Hello")
// let result = str.startsWith("welcome", 18)
// console.log(result);

// ******* startsWith() Method

// let str = "Hello javaScript, welcome to our world best javaScript cource";
// let result = str.endsWith("cource");
// console.log(result);

// *****************************************************************************/

// *****  JavaScript Array slice()

// let fruits = ["Apples", "Banana","Guava","Orange", " Lemon", "Mango"];
// let citrus = fruits.slice(0,1)
// console.log(citrus);

// let codeEditor = "vs code editor and eclipse";
// let result = codeEditor.slice(0,7)
// console.log(result);

// let myProjectName = ["javascript", "development"]
// let result = myProjectName.map((currElem, index)=>{
//     return `${currElem} ${index}`;
// })

// console.log(result);

//let result = myProjectName.indexOf("development")
//console.log(result);

// **** JavaScript String substring() Method

// The substring() method in JavaScript extracts characters between two indices from a string,
// returning the substring from the start to the end index (exclusive).

// let text = "Hello javaScript, welcome to our world best javaScript cource";
// let result = text.substring(6,15)
// console.log(result) //; // Output javaScrip

// **** JavaScript String repalce() & repalceAll() Method

// let text = "Hello javaScript, welcome to our world best javaScript cource";
// let result = text.replace("Hello", "Namsate")
// console.log(result) //

// let text = "Hello javaScript, welcome to our world best javaScript cource";
// let result = text.replaceAll("javaScript", "Alice")
// console.log(result);

// ***** JavaScript String charAt() Method

// The JavaScript String charAt() method retrieves the character at a specified index in a string.
//The index is passed as an argument to the method, and it returns the character at that position.

//Return Value: Returns a  >--single character--< located at the index specified as the argument to the function.
// If the index is out of range, then this function returns an empty string.// Out of range characters

// Original Array
// let str = 'JavaScript is object oriented language';
// let result = str.charAt(0);
// let result = str.charAt(4);
// let result = str.charAt(-6)
// let result = str.charAt();
// console.log(result);

// **** JavaScript String at() Method

// String.at() method is used to find the character at the specified index. This method is capable of taking both positive and negative indexes.
// The positive index finds the element from the start of the array and the negative index is used to find the element from the end of the array.
// Return Value -  It returns a single character string that contains the element present at the specified location.

// 1. Program

// Original String

// let str = "JavaScript is a scripting language";

// Finding the character at given index

// let value = str.at(4); // Output > S
// let value1 = str.at(-4); // output > u
// console.log(value);
// console.log(value1);

// ***** JavaScript String fromCharCode() Method

// The fromCharCode() method in JavaScript is a static method of the String object.
//Which is used to create a string from a sequence of Unicode values.
// Uppercase vs lowercase characters ASCII characters code are diffrent

//1. Program

// const charCode = function () {
//     let str = String.fromCharCode(77, 65,72,69,83,72)
//     console.log(str);

// }
// charCode();

// 2. Program

// const codeChar = function () {
//     let str = "Hello JavaScript, welcome to our world best JavaScript cource";
//     let result = str.charCodeAt(6)
//     console.log(result);
// }
// codeChar()

//3. Program

// let str = "Hello JavaScript, welcome to our world best javaScript cource";
// let result = str.charCodeAt(6)
// console.log(result);

// ***** JavaScript String Replacment() Method

let originalString = "Hello World ! How are you? World";
// let replacedString = originalString.replace(/world/gi, "Alice");
// console.log(replacedString);

// ***** JavaScript String toUpperCase() Method

//JavaScript String toUpperCase() method converts the entire string to Upper case.
// This method does not affect any of the special characters, digits, and the alphabets that are already in the upper case.

// const str =  "geeksforgeeks";
// let result = str.toUpperCase();
// console.log(result);

// let str  = "Javascript";
// let result = str.toUpperCase();
// console.log(result);

// **** JavaScript String toLowerCase() Method

// The toLowerCase() method in JavaScript converts all the characters in a string to lowercase and returns the resulting string.

// let str = "GEEKSFORGEEKS";
// let result = str.toLowerCase();
// console.log(result);

// *** JavaScript String trim() Method

// The trim() method removes whitespace from both sides of a string. It doesn’t alter the original string

// const trimstring = function () {
// let str =  "     geeksforgeeks                       ";
// console.log(str.length); // Before trim length

// let result = str.trim();
// console.log(result);
// console.log(result.length); // After trim lngth

// }

// trimstring();

// ****** JavaScript String split() Method

// JavaScript split() method proves invaluable for breaking down strings into arrays of substrings,
// utilizing a designated separator as a reference point.

// let str = "apple, banana, guava";
//  console.log(str);
// let result = str.split(",").reverse().join(" ");
// console.log(result);

// const reverseString = function (str) {
// var splitString = str.split("")
// console.log(splitString);

// var reverseArray = splitString.reverse()
// console.log(reverseArray);

// var joinArray = reverseArray.join("");
// console.log(joined);

// return joinArray;

// }

// reverseString("Hello")

/// ********* Pring a to z string ****************

//console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for ( let char = 97; char <= 122; char ++) {
//     console.log(String.fromCharCode(char));
// }

// ** Program 2

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for ( let char = 97 ; char <= 122; char ++ ) {
// console.log((String.fromCharCode(char)));
// }

// ********************* ///////////////////////

/// ********* Vowels sare present or not  ****************

// const checkallVowelsPresentOrNot = function (str) {
//     const vowles = "aeiou";
//     for ( let char of vowles) {
//         console.log(char);
//         console.log(str.includes(char));
//     }

//     if (!str.includes(char)) {
//         return false;
//     }

//     return true;

// }

// console.log(checkallVowelsPresentOrNot("my name is johns milga"));

// const checkAllWVowles = function (str) {
//   const vowles = "aeiou";

//   for (let char of vowles) {
//     console.log(char);
//     console.log(str.includes(char));
//   }

//   if (!str.includes(char)) {
//     return false;
//   }

//    return true;
// };

// console.log(checkAllWVowles("my name is Mahesh Mittha"));

// ****  Program 3

// const checkwoeles  = function (str) {
//     const wovels =  "aeiou";

//     for ( let char of wovels ) {
//         console.log(char);
//         console.log(str.includes(char));
//     }

// if (!str.includes(char)){
//     return true;
// }

// return false;

// }

// console.log(checkwoeles("mahesh mittha qeiou"));

// ****  Program 3 write a program tp count vowels in a string

// let countVolwels = (str) => {
//     let vowels = "aeiou";
//     let count = 0;

//     for ( let char of str) {
//         console.log(char);
//         console.log();

//     if (vowels.includes(char)) {
//         count++;
//     }
// }
//     return count;
// };

// console.log(countVolwels("Hello a i o u world!"));

// ****  Program 3 write a program tp count vowels in a string

// const countingVolwels = (str) => {
//   let volwels = "aeiou";
//   let count = 0;

//   for (let char of str) {
//      console.log(char);

//     if (volwels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countingVolwels("Hello a i o u world"));

// ***** Write a program javascript function to check if a given string is pangram or not ?

// const PangramCheck = (str) => {
//   let inputArr = str.toLowerCase().split("");
//   // console.log(inputArr);
//   const values = inputArr.filter(
//     (currElem) =>
//       currElem.charCodeAt() >= "a".charCodeAt() &&
//       currElem.charCodeAt() <= "z".charCodeAt()
//   );
//   // console.log(values);
//   return [...new Set(values)].length === 26;
// };

// console.log(PangramCheck("The quick $ brown fox jumps over the lazy dog"));




// ****** Program no 2

const CheckPanagram = (str) => {
  let inputArray = str.toLowerCase().split("");
//   console.log(inputArray);
  let values = inputArray.filter(
    (currElem) =>
      currElem.charCodeAt() >= "a".charCodeAt() &&
      currElem.charCodeAt() <= "z".charCodeAt()
  );
//   console.log(values);
  return [...new Set(values)].length === 26;
};

console.log(CheckPanagram("The quick $ brown fox jumps over the lazy dog"));




/*


// let mobileBrands = ["Apple", "Realme", "Samsung","Vivo","poco"];
// let result = mobileBrands.map((currElem, index)=> {
//     return `(${currElem} ${index} )`
// }).filter((cur, index)=> {
//     return `(${cur} ${index})`

// })

// console.log(result);


// const eligibetovote = function (vote) {
//     return vote > 18
// } 

// const ageFiltered = function () {
//     let filtered = [20,25,43,34,11].filter(eligibetovote)
//     console.log(filtered);
// }

// ageFiltered()

// let result = str.indexOf("For");
// console.log(result);
//let result = str.substring()
//console.log(result);

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

*/
