var _a;
var person = {
    dbId: 1223,
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello");
    },
    goodbye: function () {
        return "Bye";
    },
};
//call the greet method on the newly created person
person.greet();
//log the persons name attribute value
console.log(person.name);
// as this is a method that is potentially undefined doing the following will remove the error message that pops up
console.log((_a = person.goodbye) === null || _a === void 0 ? void 0 : _a.call(person));
