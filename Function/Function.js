//  ***** Function in JavaScript ***** ///


//1.   What is Function Declaration


// 1 Normal function declaration 
// Definition - It declares a function with a function keyword. The function declaration must have a function name.

// function square(num) {
//     return num * num;
// }

// console.log(square(2,2)  );


// 2.  Function Expression - 
// Definition - It is similar to a function declaration without the function name. Function expressions can be stored in a variable assignment. 

// const addition = function (num) {
//     return num + num;
// }
// console.log((addition(2,2)));

// 3.  Anonomysis  Function - 

// function () {

// }


// 4.   What is first calss function 

// function sqaure (num) {
//     return num * num;   
// }

// function dispalySquare(fn) {
//     console.log("Square is " + fn(5) );
// }

// dispalySquare(sqaure);


//  write a program 3 student at same time to find of two number


// a = 10;
// b = 20;
// let sum = a + b; console.log(`First Student sum of is ${sum}`);

// a = 20;
// b = 50;
// let sumtwo  = a +b; console.log(`Second Student sum of is ${sumtwo}`);

// a = 50;
// b = 50;
// let sumThree = a + b ; console.log(`Third Student sum of is ${sumThree}`);


// const student = function name(a , b) {
//     return a + b;
// }

// console.log((student(5,5)))
// console.log((student(10,20)))
// console.log((student(25,25)))


// const greet = function (name , mesages) {
//     console.log(`${name} , ${mesages}`);
// } 

// greet("Mahesh" , "Wolcome");


// let i = 14;
// let isPrime = false;

// const result = function prime (a) {

//     for (let i = 0; i <= 12; i ++);
//     if( i % 2 == 0 ) {
//     let isPrime = false; 

//     } 

//    if( isPrime ) { 
//     console.log("Prime Number");
//    } else {
//     console.log("Not Prime Number");
//    }

// }

// result(14);



// function sum(a, b) { 
//     console.log("before return keyword print , after return console does not print /excecute");
//     return a + b;
// }

// let result = sum (10, 20);
// console.log(result);




// 1. First class function 

// in a language a function is trated like varibale there function are called are first class functions

const square = function (num ) {
    return num * num;
}

function displaySqaure(fn) {
    console.log( "Square is " + fn(5));
}

displaySqaure(square);



// 2. IIFE immediately invoke function expression

