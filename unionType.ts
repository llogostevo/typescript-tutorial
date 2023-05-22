// union allows you declare more than one data type to an identifier
let score: number | string = 33;

// you can do this for your own defined types

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let person: User | Admin;

// could be an array

// set an array of two types which are predefined object literal
let people: (User|Admin)[] = [];

//push the objects to the array, they can be of either type and it is automatically read by typescript
people.push({name: "richard", id:6}, {name: "Sarah", id:1}, {username: "Sally", id:6});
console.log(people)

// cycle through each array element
people.forEach( (person)=> {
    // use an if statement to decide on the type of object, can use an attribute/key check with the in key word
    if ("name" in person){
        // this will only accept the attributes/keys from the User object
        console.log("USER: "+person.name+" "+person.id)
    } else {
        // this will only accept the attributes/keys from the admin users
        console.log("ADMIN: "+person.username+" "+person.id)

    }
});