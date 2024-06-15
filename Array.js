// An array in JavaScript is a data structure used to store multiple values in a single variable. 
//It can hold various data types and allows for dynamic resizing.
// Elements are accessed by their index, starting from 0.


// const arr = [ "John", "Andrew", "Lucy", "Diana"];

// console.log(arr.length-1);


// let arr = [];
// console.log( typeof arr);


// 1. Creating an Array using Array Literal
 

let myArray = [ "John", "Andrew", "Lucy", "Diana"];
//console.log(myArray);



// 2. Creating an Array using Array Constructor (JavaScript new Keyword)


let fruites =  new Array("Banana", "Apple", "orange");
//console.log(fruites);



// 1 . Accessing Elements

let score = [1, 2 , 3, 4, 5];
//console.log(score[2]);  // Output 3 

let myCources = ["HTML", "CSS", "JavaScript", "Java"];
//console.log(myCources[2]); // output JavaScript 



// 2. Modyfying Elements value


let myEcoomerce =  ["Amazon", "Flipkart", "Myntra" , "Microsoft"];
myEcoomerce[2] = "Apple"; 
//console.log(myEcoomerce);  // Output ["Amazon", "Flipkart", "Apple" , "Microsoft"];


let player = ["Virat", "rohit", "hardik", "bumrah"];
let result = player[3] = "Chahal";
//console.log(player);




// 3. Array tranversal / Array Iteration 

// 1. For of loop / Itreation 

// let techBrands = ["Accenture", "Braclays", "TCS", "Wipro", "Infosys" ];

// for ( let item of techBrands ) {
//     console.log(item);  // Output ["Accenture", "Braclays", "TCS", "Wipro", "Infosys" ]
// }


// let vegetables = ["spinach", "bringle", "ladyfinger", "cabbage", "cauliflower"];

// for ( let item of vegetables ) {
//     console.log(item);
// }



// let array = [1,2,3,4,5,6,7,8,9,10];
// for( let item of array) {
//     console.log(item);
// }


// let str = "Hello";

// for( let item of str) {
//     console.log(item);
// }


// const map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
//   ]);
   
//   for (const [key, value] of map) {
//     console.log(`Key: ${key}, Value: ${value}`);
//   }


// 2 . For loop   

// let sports = ["cricket", "football", "basketball", "hockey", "chess"];

// for ( let i = 0 ; i < sports.length ; i++ ) { 
//    console.log(sports[i]);  // output   ["cricket", "football", "basketball", "hockey", "chess"]
// }



// 3.  for in loop 


// let language = ["German", "japanese", " French" ," Spanish" , "English"] ;

// for ( let item in language ) {
//     console.log(item);
// }



// 4. JavaScript Array forEach() Method


// The forEach() method calls a function for each element in an array.
// It does not return a new array and does not modify the original array. 
//It’s commonly used for iteration and performing actions on each array element.

// simple meaning - Perform action on each element of an array


let myStates = [
    "Maharashtra",
    "Gujrat",
    "Andra Pradesh",
    "Telnagana",
    "Karntaka",
    "Kerala"
]

myStates.forEach((ele, index, arr) => {
    //console.log(`${ele} ${index}`);
    // console.log(arr);
})



//  1 Pragram Practice 

// let myCitys = ["Pune" ,"Hyderbad", "Banglore", "Solapur", "Chennai"];

// let myForEeachArr = myCitys.forEach((ele , index, )=> {
//     console.log((`${index} ${ele}`)); 
// })


// 2 . Write a programm multiply Each Element with 2

// Pragram Start Here // 

let myNum = [1,2,3,4,5,6,7];

let myNumForEachArr = myNum.forEach((ele, index)=> {
    // console.log(` ${ele * 2 }`);
    
})
// Pragram End Here // 


// For Each Prgram Start Here // 

// let myNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let myNumbersMap = myNumbers.forEach((curElem)=>{
//     console.log(( `${curElem * 2}`));
// })

// For Each Pragram End Here // 




// 5 . JavaScript Array map() Method

// The map() method creates an array by calling a specific function on each element present in the parent array. 
// It is a non-mutating method. This method iterates over an array and calls the function on every element of an array.
// Simple - it'screates a new array with transformed elements


// Question 1.  Map Program Start Here // 


// let myFruitesArray = ["Apple", "Banana", "Grapes", "Sweetcorn"];
// let myMapArray = myFruitesArray.map((ele , index )=> {
//     return ( `${ele} ${index} `)

// })
// console.log(myMapArray);
// console.log(myFruitesArray);

// Program End Here // 



// Question 2 Map Pragram Start Here // 

// let numbers  = [10,20,30,40,50];
// let myNumMap =  numbers.map((ele) => {
//     return ele * 2
// })

// console.log(myNumMap);

// Program End Here // 


// let languages = ["Japanese", "Korean", "Chinese", "French", "English"];
// let languagesArray = languages.map((curElem)=> {
//   return (`${curElem}`)  
// })

// console.log(languagesArray); // Returned an Array of strings


let scoreCard = [35, 48, 58, 67, 32, 78, 66, 90, 89, 95];
let scoreCardArray = scoreCard.map((curElem)=> {
return (`${curElem * 2}`)
})


//console.log(scoreCard);
//console.log(scoreCardArray);



// **********How to Perform CRUD Operations on JavaScript Object ?******************** //

// The operations are Create, Read, Update, and Delete. 
//With these operations, we can create, take input, manipulate & destroy the objects.
//JavaScript Objects are a collection of keys, values or properties/attributes, and entries.
// The values can be any data type as well as JavaScript functions, arrays, etc.



// 1 Push Method - add element to the end of the arry

// Explation - The push() method in JavaScript adds one or more elements to the end of an array
// and returns the new length of the array.


// Program 1

let persons = ["peter", "john", "doe", "alice", "donald"];
persons.push("lucy")
//console.log(persons); // output  ["peter", "john", "doe", "alice" ,"lucy"]



// Program 2

/*
let myTechBrands = ["Amazon", "Microsoft", "Google", "Facebook","Twitter","META"];
let myPushArr = myTechBrands.push("Tata Technology");
console.log(myTechBrands);
console.log(myPushArr);
*/

// Program 3


/*
let myLanguage = ["French", "Japanese", "Chinese", "Spanish", "German"];
console.log(myLanguage.push("Russian"));
console.log(myLanguage);
*/

// Program 4

let vegetables = ["parsnip", "potato"];
let moreVeg = ["celery", "beetroot"];
//console.log(vegetables.push(...moreVeg));


let sports = ["soccer", "baseball" ];
let total = sports.push("football", "swimming");
//console.log(total);







// 2 The pop() method removes (pops) the last element of an array

// Explanation - The pop() method removes (pops) the last element of an array. 
//The pop() method changes the original array.
// It reduces the array’s length by one and returns the removed element

// Program 1 


/*
let nameofCity = ["Pune", "Hyderbad", "Banglore", "Mumbai", "Solapur" ];
console.log(nameofCity.pop());
*/


// Program 2 


/*
function func () {
    let arr = ["Mahesh", "Mittha"];
   let popped = arr.pop();
   console.log(popped);
}
func();
*/

// Program 3

let myFavCoutries = ["India", "united States", "New Zealand", "San Francisco", "Massachusetts", "Singapore",];
let popMyFavCoutries = myFavCoutries.pop();
// console.log(popMyFavCoutries);
// console.log(myFavCoutries);


// Program 4

let array = ["1", "2", "3", "4", "5" ];
//console.log(array.pop());


// Program 5

let arrayList = ["Hello", "world", "GeeksforGeeks" ,"JavaScript", "Reactjs"];
// console.log(arrayList.pop());
// console.log(arrayList);




// 3 JavaScript Array unshift() Method

// JavaScript Array unshift() Method is used to add one or more elements to the beginning of the given array.
// This function increases the length of the existing array by the number of elements added to the array.
// Return Value - This function returns the new length of the array after inserting the arguments at the beginning of the array. 


/*
let browsers = ["Crome", "Mozila", "InternetExplore", "Opera" ]
console.log(browsers.unshift("Safari"));
console.log(browsers);
*/


/*

let myLang = ["English", "Hindi", "Bengali" ,"Arabic", "Armenian"];
let myLangString =  myLang.unshift("Spanish");
console.log(myLangString);
console.log(myLang);
*/


// 4. JavaScript Array shift() Method

// JavaScript Array shift() Method removes the first element of the array thus reducing the size of the original array by 1.
// Return Value: This function returns the removed first element of the array. If the array is empty then this function returns undefined.


// let originalArray = ["a", "b", "c", "d", "e"];
// let shiftArray = originalArray.shift();
// console.log(shiftArray);
// console.log(originalArray);


















 





























































// 4. JavaScript Array Filter Method

// const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const myFilter = myNum.filter((num)=> num > 5) 
// console.log(myFilter);






































