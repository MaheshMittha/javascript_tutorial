// Inheritance

// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   PrinMe() {
//     console.log(`UserName: ${this.username}`);
//   }
// }

// class Teacher extends User {
//     constructor(username, email, password) { 
//         super(username)
//         this.email = email;
//         this.password = password;
//     }

//     addCourse() {
//         console.log(`new cource was added ${this.username}`);
//     }
// }


// const chai = new Teacher ("mahesh", "mahesh@google.com", 123456);
// chai.addCourse();



// program 2


class Admin {
    constructor(username){
        this.username = username;
    }

printMessage(){
    console.log(`UserName: ${this.username}`);
} 
}

// Exnten Mahesh from Admin 

class Mahesh extends Admin { 
    constructor(username, password, email){ 
        super(username)
        this.password = password;
        this.email = email;
    }

AccessProvide (){
    console.log(` Access Granted: ${this.username}`);
}
}

const chai =  new Mahesh ("Ajay", "ajay@gmail.com", 123)
chai.AccessProvide();




