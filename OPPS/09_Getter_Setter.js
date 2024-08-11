// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get password() {
//     return this._password.toUpperCase();
//   }

//   set password(value) {
//     this._password = value.toUpperCase();
//   }
// }

// const hitesh = new User("mahesh@gmail.com", "abc");
// //console.log(hitesh.password);

// **** Program **** ////////

// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   // For Email
//   get email() {
//     return this._email
//   }

//   set email(value) {
//     this._email = value.split("").reverse().join("")
//   }

//   // For Password

//   get password() {
//     return this._password
//   }

//   set password(value) {
//     this._password = value.split("").reverse().join("")
//   }
// }

// const data = new User("abc@gmail.com" , "password123")
// console.log(data.password);
// //console.log(data.email);

// **** Program **** ////////

const person = {
  name: "John",
  _age: 0,

  get age() {
    return this._age;
  },

  set age(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Age must be a positive number");
    }
    this._age = value;
  },
};

person.age = 25;
console.log(person.age);

