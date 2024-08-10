// Es 6 

// Using Clas


// class User {
//     constructor(username, email, password) {
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptedPassword() {
//         return `${this.password}abc `
//     }

//     changeUsername () {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const UserOne = new User ("mahesh", "mahesh@gmail.com", 123)
// console.log(UserOne.encryptedPassword());
// console.log(UserOne.changeUsername());




function User (username, email, password) { 
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptedPassword = function () {
    return `${this.password}1993`
}

User.prototype.ChangeUserName = function () {
    return  `${this.username.toUpperCase()}`
}

const chai = new User ("chai", "chai@gmail.com", "React" )
const tea = new User ("tea", "tea@gmail.com", "javascript")
console.log(chai.encryptedPassword());
console.log(tea.encryptedPassword());
