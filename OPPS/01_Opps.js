// Objects in javascript


// object Literals


const jsUser = {
name : "mahesh",
age : 18,
location : "jaiapur",
email: "mahesh@google.com",
isLoggedIn : false,
lastLoginDate : ["Monday", "Saturday"]
}


// console.log(jsUser.name);

// jsUser.email = "mahesh@chatgpt.com"
// // Object.freeze(jsUser)
// jsUser.email = "mahesh@microsoft.com"
// // console.log(jsUser);


// jsUser.greeting = ()=>{
// console.log("Hello js user");
// }

// jsUser.greeting = ()=>{
//     console.log("Hello js user");
//     }
    
// console.log(jsUser.greeting);



// 1. Object Declations 
// *** tinderUser Object Start Her *** // 
//const tinderUser = new Object();
let tinderUser = {};
tinderUser.id = "123abc"
tinderUser.name = "John Smith"
tinderUser.isLoggedIn = false;
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(Object.hasOwnProperty(('isLoggedIn')));
// console.log(Object.propertyIsEnumerable(tinderUser));

// *** tinderUser Object End Her *** // 


// *** RegulareUser Object Start Here *** // 


const regularUser = {
    email: "mahesh@meta.com",
    userFullName : {
        firstName: "mahesh",
        lastname : "mittha",
    }   
}

//console.log(regularUser.userFullName.firstName);

// *** RegulareUser Object End Here *** // 


// *** Object Merge Start Here ** //  

let obj1 = {1: 'John', 2: 'Doe', 3: 'smith'};
let obj2 = {4: 'Alice', 5: 'mac', 6: 'peter'};
let obj3 = Object.assign(obj1, obj2);  // ===> Object.assign
//let obj3 = {obj1, obj2}
let obj4 = {...obj1, ...obj2} // ===> Spread Operator
//console.log(obj4);
// *** Object Merge End Here ** //  



// *** Object Destructing  *** //


const course = {
    courseName : "javascript",
    price : "999",
    courseInstructor : "mahesh",
}

const {courseInstructor , courseName, price  } = course          
//console.log(courseInstructor);
//console.log(courseName);


// ---------------------------------------------------------------------------------------------//


//  ****  This Keyword in javascript *** /// 

// *** Program 1 

// const user = {
//     userName: "mahesh",
//     loginCount : 8,
//     signedIn : true,


//     getUserDetails : function () {
//         // console.log("get user details from database");
//         // console.log(this);                                      // This keyword rerefrs current context object 
//         //console.log(`Username: ${this.userName}`);
//     }

// }


// // console.log(user.userName);
// console.log(user.getUserDetails());



// *** Program 2

let flipkartuser = { 
    username : 'mahesh',
    loginCount : 8,
    signedIn: true,

getFlikartUserDetails : function () {
    // console.log(this);
    // console.log(this.username);
    //console.log(`UserName ${this.username}`);
}
}

// console.log(flipkartuser.getFlikartUserDetails());


//  **** This keyword and Constructor in javascript *** /// 


// *** Proram 1

function User(username, loginCount , isloogedIn )  {
    this.username = username;
    this.loginCount = loginCount;
    this.isloogedIn = isloogedIn;

    return this;
}

const UserOne  =  new User ("mahesh", 12 , true)
const UserTwo =  new User ("ganesh", 18, false)
//console.log(UserOne);
//console.log(UserTwo);

// *** Proram 2


function AmazonUser (username, password, isloogedIn) {
    this.username = username;
    this.password = password;
    this.isloogedIn = isloogedIn;


    this.Greeting = function () {
        //console.log(`Welcome to Amazon ${username}`);
    }   
}

const AmazonUserOne = new AmazonUser("Ajay", 123, true);
const AmazonUserTwo = new AmazonUser("Navin", 1234, false);
//console.log(AmazonUserOne);
//console.log(AmazonUserTwo);


// *** Program 3

// Obejct Literal

const MyntraUser = {
    username : "Virat Kohli",
    password : 123,
    isLoggedIn : true,

    getUserDetails: function() {
        console.log(`UserName:- ${this.username}`);
        console.log(this);
    }
}

//console.log(MyntraUser.getUserDetails());



// *** Program 4

function Country (name , population, isDemocracy ){
    this.name = name;
    this.population = population;
    this.isDemocracy = isDemocracy;
    return this;
}

const countryOne = new Country("India", 124, true); 
const countryTwo = new Country("Russia" ,70, false)
//console.log(countryOne);
//console.log(countryTwo);


// Explanation
// - New Kyword  
// - Empyty Object creates (Instance)
// - Connstructor function called with new keyword (All arguments)
// - All argumnets get injected 


// *** Program 5


function UserData (username, password, isLogged) {
    this.username = username;
    this.password = password;
    this.isLogged = isLogged;
    return this;
}

const UserDataOne = new UserData ("Lucy", 10, true)
const UserDataTwo = new UserData ("Alice", 20, false)

console.log(UserDataOne);
console.log(UserDataTwo);










































