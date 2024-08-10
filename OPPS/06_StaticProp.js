// 06_StaticProp.js

class User {
  constructor(username) {
    this.username = username;
  }

  LogMe() {
    console.log(`UserName: ${this.username}`);
  }
  static CreateId() {
    return `123`;
  }
}

const hitesh = new User("hitesh");
// console.log(hitesh.CreateId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const cources = new Teacher("mahesh", "mahesh@gmail.com");
cources.LogMe();
console.log(cources.CreateId()); // Static  - TypeError: cources.CreateId is not a function



