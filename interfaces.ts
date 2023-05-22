//create an interface person
interface Person {
    //this is assigned on first creation but after this it is no longer editable
    readonly dbId: number;
    name: string;
    age: number;
    // this is optional
    googleId?: string;
    //a method is required that will take no parameters and return no value i.e. it will be a procedure
    greet():void;
    //a method can be optional, it should have the ? before the parenthesis
    //a method can also define the return values and paramaters
    // this is taking a parameter string
    // it is also going to return a string
    goodbye?(): string;
    
  }

interface Admin extends Person {
    role: "Admin" | "Ta" | "learner"
  }

let person: Person = {
    dbId: 1223,
    name: "John",
    age: 30,
    greet() {
        console.log("Hello");
    },
    goodbye() {
        return "Bye";
    },
};

//call the greet method on the newly created person
person.greet();
//log the persons name attribute value
console.log(person.name);
// as this is a method that is potentially undefined doing the following will remove the error message that pops up
console.log(person.goodbye?.());