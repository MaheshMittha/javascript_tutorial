
// JavaScript Math Reference


// JavaScript Math object is used to perform mathematical operations on numbers. 
//Math is an inbuilt object that works with numbers types but it does not work with BigInt.

// Math.Pi : Reprsents the mathematical constanst pi (n)

// ? 1: Constants: 

/*
const piVlaue = Math.PI;
console.log(piVlaue);
*/

// ? Math.abs() //  Javascript Math.abs() method is used to return the absolute value of a number. 
// ? It takes a number as its parameter and returns its absolute value.
// ? Or simple , how far is the number from 0 

/*
console.log(Math.abs(6)); // Output 6
console.log(-3);  // Output 3 
console.log(-6); // Output 6 
*/

// ? Math.round() // Javascript Math.round() round to the nearest integer.

/*
const roundedValue =Math.round(3.7);
console.log(roundedValue); // Output 4 
*/


// ? Math.ceil() // Javascript Math.ceil() round to the nearest integer.
// ? Output always after point add 1


/*

//const ceiledValue = Math.ceil(3.7); // Ouput 4 
//const ceiledValue = Math.ceil(3.9); // Ouput 4
const ceiledValue = Math.ceil(3.1); // output 4
console.log(ceiledValue); // Output 

*/



// ? Math.floor(x) // Javascript floor.ceil(). return the value of of x rounded down to its nearest integer.

/*
//const floorValue = Math.floor(3.0); // Output 3
//const floorValue = Math.floor(3.7) // Output 3
const floorValue =Math.floor(8.4) // output 8 
console.log(floorValue);  // ignore the after point value 
*/


// ? Math.trunc(x) // Javascript floor.ceil(). return the value of of x rounded down to its nearest integer.

// The Math.trunc() method in JavaScript returns the integer part of a number by removing its fractional part.
// It essentially truncates the decimal portion of a number towards zero, resulting in an integer.


/*

//const truncValue = Math.trunc(4.54);
//const truncValue = Math.floor(-4)
const truncValue = Math.trunc(-3.9)
console.log(truncValue); 
*/



// ? JavaScript Math pow() Method

// The Math. pow() method is used to power a number i.e., the value of the number raised to some exponent.
// Since Math.pow() is a static method of Math and therefore it is always used as Math.pow() and not as a method of an object created in Math class.
// Syntax - Math.pow(base, exponent)
//Parameter
// 1. base: It is the base number that is to be raised.
// 2. exponent: It is the value used to raise the base.

/*

console.log(Math.pow(2,3)); //Output 8 Eg. 2*2*2 = 8
console.log(Math.pow(2,4)); // Output 16
console.log(Math.pow(2,5)); // Output 32 

*/


// ?  JavaScript Math sqrt() Method

// The JavaScript Math sqrt( ) Method in JavaScript is used to square the root of the number passed as a parameter to the function. 
// Syntax: Math.sqrt(value)
// Return : Returns: Square root of the number passed as a parameter.

/*

console.log(Math.sqrt(25)); // output 5
console.log(Math.sqrt(36)); // output 6
console.log(Math.sqrt(49)); // output 7
console.log(Math.sqrt(64)); // output 8

*/


// ?  JavaScript Math log() Method

// value: This parameter holds a number whose natural logarithm you want to find.
// Return value: The Math.log() method returns the natural logarithm given number.

/*

let logResult = Math.log(2);
console.log(logResult);

*/


// ? JavaScript Math random() Method

// The JavaScript Math.random() function gives you a random number between 0 and just under 1.
// Parameters: This function does not accept any parameter.
// Return Value: The math.random() function returns a floating-point, pseudo-random number between range [0,1) , 0 (inclusive), and 1 (exclusive).


// console.log(Math.random());
//console.log((Math.random()*100).toFixed(3));
//console.log((Math.random()*100).toFixed(6));
//console.log((Math.random()*100).toFixed(3));































































