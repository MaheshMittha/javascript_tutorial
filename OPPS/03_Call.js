
// 1. Call Practicle Example

// Creating an Dcord application setting user name and check rules and call database etc.


function SetUsername (username) {
    // Complex DB call
    this.username = username;
    //console.log("called");
}

function CreateUser (username, email, password) {
    SetUsername.call(this,username)   
    this.email = email;
    this.password = password;
}


const chai = new CreateUser("chai", "chai@gmail.com", 123)
//console.log(chai);
 

// Program 2

function SetUserNameOne (username) {
    this.username = username
    //console.log("called");
}


function CreateUserOne (username, email, password) {
    SetUserNameOne.call(this, username);
    this.email = email,
    this.password = password
}

const data = new CreateUserOne ("mahesh", "mahesh@gmail.com", 123)
console.log(data);
