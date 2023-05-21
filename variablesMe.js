var greetings = "Hello Lloyd";
console.log(greetings);
console.log(greetings.charAt(6));
console.log(greetings.toLocaleUpperCase());
// you can declare the data type of 
var userId = 333232;
console.log(userId);
var isLoggedIn = false;
var studentNo = 33323.8478;
// this returns a number as a string to a certain number of decimal places
console.log(studentNo.toFixed(2));
function addTwo(num) {
    return num + 2;
}
function signUp(name, email, password, isPaid) {
    // in here
}
// this shows example of setting a default value, also uses an arrow function
var loginUser = function (name, email, password, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log(name, email, password, isPaid);
};
loginUser("Bobby", "bob@bob.com", "b*bby", false);
loginUser("sarah", "sarah@bob.com", "b*sar");
// the first :number states the paramater must be a number value, 
// the second :number states that the function must return a number value
function multTwo(num) {
    return num * 2;
}
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
}
// same as above but in arrow function
// uses union type which states two potential outputs
var getNewVal = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 Ok";
};
// take an array
var heros = ["thor", "spiderman", "ironman"];
// use map which applies to each array element
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
