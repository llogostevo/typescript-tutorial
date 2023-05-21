"use strict";
// user object
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return user;
}
function greet(user) {
    return "Hello " + user.name;
}
var personBob = { _id: "hello", name: "Bob", email: "b@zamora.com", isActive: true };
console.log(greet(personBob));
personBob.name = "Loris";
console.log(greet(personBob));
console.log(personBob._id, personBob.name, personBob.email, personBob.isActive);
var personSarah = { _id: "12sarah", name: "Sarah", email: "s@zamora.com", isActive: true, credcardDetails: 123112312 };
console.log(personSarah.credcardDetails);
