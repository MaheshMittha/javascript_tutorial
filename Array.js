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
    console.log(` ${ele * 2 }`);
    
})

// Pragram End Here // 





// 5 . JavaScript Array map() Method

// The map() method creates an array by calling a specific function on each element present in the parent array. 
// It is a non-mutating method. This method iterates over an array and calls the function on every element of an array.


// Program Start Here // 


// let myFruitesArray = ["Apple", "Banana", "Grapes", "Sweetcorn"];
// let myMapArray = myFruitesArray.map((ele , index )=> {
//     return ( `${ele} ${index} `)

// })
// console.log(myMapArray);
// console.log(myFruitesArray);

// Program End Here // 



// Pragram Start Here // 

let numbers  = [10,20,30,40,50];
let myNumMap =  numbers.map((ele) => {
    return ele * 2
})

console.log(myNumMap);

// Program End Here // 
































// 4. JavaScript Array Filter Method

// const myNum = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// const myFilter = myNum.filter((num)=> num > 5) 
// console.log(myFilter);




































