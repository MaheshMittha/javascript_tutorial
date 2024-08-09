// let myName = "mahesh     ";
// console.log(truelength);


//console.log(myName.trim().length);




let myHeros = ["thor", "spiderman"];

let heroPower = { 
    thor: "hammer",
    spiderman: "sling",

    getspiderPower: function () {
        console.log(`Spidey Poewer ${this.spiderman}`);   
    }
}

Object.prototype.hitesh = function(){
    //console.log("hitesh is present in all object");
}

Array.prototype.heyHitesh = function () {
    //console.log('Hitesh says Hello');
    
}

//heroPower.hitest();
//myHeros.hitesh();
//myHeros.heyHitesh();


// ** Program 2



function Person (name , age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log("Hello my name is " + this.name + " and my age is " + this.age + " years old");
    this.name = this.name;
    this.age = this.age;
}



var person1 = new Person("mahesh", 30);
var person2 = new Person("ganesh", 30);
//console.log(person1);
//console.log(person2);



// Program 3


// function CricketChampion (name, score ) {
//     this.name = name;
//     this.score = score;
// }

// CricketChampion.prototype.increment = function () {
//     this.score++;
// }

// CricketChampion.prototype.greeting = function () {
//     console.log(`Your are champion ${this.name}`);
// }

// const palyer1 = new CricketChampion ("virat" , 30)
// const palyer2 = new CricketChampion ("dhoni" , 20)

// palyer1.increment()
// palyer2.greeting()


 // Program 4 

//  function StockMarket (profit, loss) {
//     this.profit = profit;
//     this.loss = loss;
//  }

//  StockMarket.prototype.increment = function () {
//     this.profit++;
//  }

//  StockMarket.prototype.greeting = function () {
//     console.log(` You will be became one day ${this.profit}`);
//  }

//  const male = new StockMarket ("mahesh", 2000)
//  const female = new StockMarket("ganesh", 1000 )
//  male.increment();
//  female.greeting();


// Program 5


let myarray = ["a" , "b"]

let myheroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower : function () {
        console.log(` SpideyPower is ${this.spiderman}`);
    }    
}

Object.prototype.hitesh = function () {
    console.log(`hitesh is present in all objects`);
}

Array.prototype.sayHitesh = function () {
    console.log("Say hello to Hitesh");
}

//myheroPower.hitesh() // Object 
//myarray.sayHitesh()
//myarray.hitesh() // Array 


// ** Inheritance

let userName = "MaheshMittha         ";

String.prototype.truelenght = function () {
    console.log(`${this}`);
    console.log(`True lenght is: ${this.trim().length}`);
}

userName.truelenght();
"lemontea".truelenght();
"blacktea".truelenght();








 

























