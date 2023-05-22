//create an interface person
interface Person {
    name: string;
    age: number;
    //a method is required that will take no parameters and return no value i.e. it will be a procedure
    greet():void;
  }


let person: Person = {
    name: "John",
    age: 30, 
    greet() {
        console.log("Hello")
    },
};

//call the greet method on the newly created person
person.greet();
//log the persons name attribute value
console.log(person.name);