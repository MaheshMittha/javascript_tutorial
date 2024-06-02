// console.log("Hi Mahesh");

// var myAge = 25;
// console.log(myAge);

//var _myName = "Mahesh;";
//console.log(_myName);

//var $myName = "Mahesh Mittha";
//console.log($myName);

// var 123myName = "MM"
// console.log(123myName);

// var my@Name = "Mahesh Mittha";
// log(my@Name);


// **** Varibale interview prepration question ******* // 

// var vs let vs const 


//scope = the scope is certain reason of programm were defined varibale exist and can be recongninzed and
//beyond that can not be recongninzed. 


// Three  Global scope , Functional scope , block scope


// Globale scope

{
    const a = 5;
    // console.log(a);
}



// 2.  Function scope

// function name () {

// }


// 3.  Block scope

// {

// }


// ******* variable shodowing start here ********* // 


// function test() {
//     let a = "Hello world"

//     {
//         if (true) {
//             let a = "Hi"
//             console.log(a);
//         } 
//     }

//     console.log(a);
// }

// test();



// Shadowing variables should not cross the boundry of scope 
// var varibale can shadow with let varibale but can not do opposite

/*
 Scope is a certain section/region of the program where a defined variable can have its existence 
 and can be recognized, beyond that it can’t be accessed


/*
// below is the expample 

// function test() {
//     var a = "Hello";
//     let b = "bye";

//     if (true) {
//         let a = "Hi";
//         var b = "Goodbye";
//         console.log(a);
//         console.log(b);
//     }
// }

// test();


// ***** Declaration without intilisation of vraibales var & let , const ********* // 

// var a ;   // it is fine to declare a variable  
// var a ;  // it is fine to declare a variable

//let b ;  // SyntaxError: Identifier 'b' has already been declared
// let b ;  // SyntaxError: Identifier 'b' has already been declared

//const c ; //  SyntaxError: Missing initializer in const declaration
//const c ; //  SyntaxError: Missing initializer in const declaration

// Explation >>  let & const can not declared in same scope but var can be declared


// ***** var & let & const Reinitialization ******* //

var a = 5;   // With var it's Reinitialize the value 
a  = 10; 


let b = 10;
b = 10;     // With let reinitialize the value


const c = 15;
c = 20;  //  but with const it's can not reinitilize >>> Error - Assignment to constant variable.



// ***** Hoisting ******* //

// 1. Understand Javacript Execution context **** //

// 1 Creation Phase
// - Craetes global or window objects
// - Setup heap memory for storing varibales and objects
//-  Intialize function and variables with undefined.
*/


const accountID = 10;

accountID = 50;
console.log(accountID);



