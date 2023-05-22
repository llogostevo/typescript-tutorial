// this is one way to define an array in ts
var people = ["Bob", "Richard", "Wookie"];
console.log(people[0]);
// arrays can use methods like JS e.g. the map method
people.map(function (person) { return console.log("Person " + person); });
// this is another way to declare an array
var footballTeams = ["Liverpool", "Man Utd", "Everton", "Arsenal"];
// this is then creating an array of the objects
// create a constant allUsers which is of type User which is currently an empty array
var allUsers = [];
// to push onto that array you would need to match the object details
allUsers.push({ name: "Johnny", isActive: false }, { name: "Sarah", isActive: true }, { name: "Lucy", isActive: true });
console.log(allUsers);
console.log(allUsers[0]);
console.log(allUsers[0].name);
console.log("########");
allUsers.forEach(function (user) {
    if (user.isActive) {
        console.log(user.name);
    }
});
