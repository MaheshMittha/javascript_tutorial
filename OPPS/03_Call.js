// 1. Call Practicle Example

// Creating an Dcord application setting user name and check rules and call database etc.

function SetUsername(username) {
  // Complex DB call
  this.username = username;
  //console.log("called");
}

function CreateUser(username, email, password) {
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new CreateUser("chai", "chai@gmail.com", 123);
//console.log(chai);

// Program 2

function SetUserNameOne(username) {
  this.username = username;
  //console.log("called");
}

function CreateUserOne(username, email, password) {
  SetUserNameOne.call(this, username);
  (this.email = email), (this.password = password);
}

const data = new CreateUserOne("mahesh", "mahesh@gmail.com", 123);
//console.log(data);

// Program 3

var obj = { name: "mahesh" };
function sayHello(age, profession) {
  return "Hello " + this.name + " is " + age + " and is an " + profession;
}

//console.log(sayHello.call(obj, 30, "Software Engineer")) // Call
//console.log(sayHello.apply(obj, [30, "Software Engineer"])); // Apply Warp in Array

// *** Interview Scenairo bases Question

var age = 10;

let Person = {
  name: "mahesh",
  age: 20,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 24 };
//console.log(Person.getAge()); //20 Pointing To Person Obejct
//console.log(Person.getAge.call(person2));// 24 Pointing to Person2 Object
//console.log(Person.getAge.bind(person2)()); // Return function

// *** Interview Scenairo bases Question

// var status = "😎";

// setTimeout(() => {
//   const status = "😍";

//   const data = {
//     status: "🥑",
//     getStatus() {
//       return this.status;
//     },
//   };

//   console.log(data.getStatus()); // 🥑
//   console.log(data.getStatus.call(this));

// },0);












