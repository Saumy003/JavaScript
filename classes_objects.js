// Prototypes in JS //

const student = {
    fullName : "Brendan Eich",
    marks : 94.4,
    printMarks : function () {
        console.log("marks = " , this.marks);
    },
};

// Method to define function in Object  //
const employee = {
    calcTax() {                          // define function calcTax()
        console.log("Tax rate is 18%");
    },
};
// both are to ways to declare the function in object:-
/* const employee = {
     calcTax : function () {
         console.log("Tax rate is 18%");
     },
} */

// Use one object function to another object //
const result = {
    cgpa() {
        console.log("You got 9.3 cgpa");
    },
};

const boy = {
    mark : 475 ,
};

boy.__proto__ = result;     // use __proto__ to use func of one object in another object //



// Classes in JS //

class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop")
    }

    setBrand(brand) {
        this.brand = brand;
    }
    
}

// syntax to create objects from any class //
let fortuner = new ToyotaCar();
fortuner.setBrand("Innova")
let lexus = new ToyotaCar();

// constructor() in class //

class ibm {
    constructor(model , mileage) {
        this.model = model;
        this. mileage = mileage;
    }
}

let bmw = new ibm("M4" , 120);  // constructor //


// Inheritance in JS // 

class Parent {
    hello() {
        console.log("Hello");
    }

}
class Child extends Parent {}     // Inheritance //

let obj = new Child();            // obj is the object here//

// Example in Inheritance //
class Person {
    eat() {
        console.log("eat")
    }

    sleep() {
        console.log("sleep")
    }
}

class Engineer extends Person {                            // person Class is Inherited to Engineer class //
    work() {
        console.log("Solve problem , build something")
    }
}

let Saumy = new Engineer();    // Saumy is the object here//

// "super" keyword

class People {
    constructor() {
    this.species = "homo-sapiens";

    }
    walk() {
        console.log("Walk");
    }
} 

class Doctor extends People {
    constructor(branch) {
        super();                      // to invoke parent class constructor
        this.branch
    }
    surgery() {
        console.log("surgery");
    }
}

let doc = new Doctor("Dentist");