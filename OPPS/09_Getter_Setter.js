
// **** 1 class based Program getter and setter **** ////////

// ** Prgram Start

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
//console.log(hitesh.password);

// *** Prgram Ended 



// **** 2 class based Program getter and setter **** ////////

/*
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  // For Email
  get email() {
    return this._email
  }

  set email(value) {
    this._email = value.split("").reverse().join("")
  }

   For Password

  get password() {
    return this._password
  }

  set password(value) {
    this._password = value.split("").reverse().join("")
  }
}

const data = new User("abc@gmail.com" , "password123")
console.log(data.password);
console.log(data.email);

*/

// **** 3 Object based Program getter and setter **** ////////

/*
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

person.age = 32;
console.log(person.age);

*/


// **** 4 Function base Getter and Setter Program **** ////////

/*
function User (email , password) {
this._email = email;
this._password = password;

Object.defineProperty(this, 'password', {
  get: function() {
    return this._password
  },

  set: function(value) {
    this._password = value
  }
})

Object.defineProperty(this, 'email',{
  get:function() {
    return this._email.toUpperCase();
  },
  set:function(value){
    this._email = value
  }
})
} 

const chai = new User ("chai@chai.com", "1234")
console.log(chai.email);
console.log(chai.password);

*/



// **** 6 Object based Program getter and setter **** ////////


const User = {
  _email : "mahesh@fb.com",
  _password: "abc123",

 get email() {
  return this._email.toLowerCase();
 },

 set email(value) {
  this._email = value;
},

get password(){
  return this._password
},

set password(value) {
  this._password = value.join("").reverse().join("");

}
}

const tea = Object.create(User);
console.log(tea.email);
console.log(tea.password);













