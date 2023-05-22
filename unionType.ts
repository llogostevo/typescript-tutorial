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

let people: (User|Admin)[] = [];

people.push({name: "richard", id:6}, {name: "Sarah", id:1}, {username: "Sally", id:6});
console.log(people)

people.forEach( (person)=> {
    if ("name" in person){
        console.log("USER: "+person.name+" "+person.id)
    } else {
        console.log("ADMIN: "+person.username+" "+person.id)

    }
});