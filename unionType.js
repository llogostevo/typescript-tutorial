// union allows you declare more than one data type to an identifier
var score = 33;
var person;
// could be an array
var people = [];
people.push({ name: "richard", id: 6 }, { name: "Sarah", id: 1 }, { username: "Sally", id: 6 });
console.log(people);
people.forEach(function (person) {
    if ("name" in person) {
        console.log("USER: " + person.name + " " + person.id);
    }
    else {
        console.log("ADMIN: " + person.username + " " + person.id);
    }
});
