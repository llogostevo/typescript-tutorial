// union allows you declare more than one data type to an identifier
var score = 33;
var person;
// could be an array
// set an array of two types which are predefined object literal
var people = [];
//push the objects to the array, they can be of either type and it is automatically read by typescript
people.push({ name: "richard", id: 6 }, { name: "Sarah", id: 1 }, { username: "Sally", id: 6 });
console.log(people);
// cycle through each array element
people.forEach(function (person) {
    // use an if statement to decide on the type of object, can use an attribute/key check with the in key word
    if ("name" in person) {
        // this will only accept the attributes/keys from the User object
        console.log("USER: " + person.name + " " + person.id);
    }
    else {
        // this will only accept the attributes/keys from the admin users
        console.log("ADMIN: " + person.username + " " + person.id);
    }
});
