let greetings: string = "Hello Lloyd";

console.log(greetings);

console.log(greetings.charAt(6));
console.log(greetings.toLocaleUpperCase());

// you can declare the data type of 
let userId: number = 333232;

console.log(userId)

let isLoggedIn: boolean = false;


let studentNo = 33323.8478

// this returns a number as a string to a certain number of decimal places
console.log(studentNo.toFixed(2))

function addTwo(num: number) {
    return num+2;
}

function signUp(name: string, email: string, password: string, isPaid: boolean) {
    // in here
}

// this shows example of setting a default value, also uses an arrow function
let loginUser = (name: string, email: string, password: string, isPaid: boolean = true) => {

    console.log(name, email, password, isPaid);
}

loginUser("Bobby", "bob@bob.com", "b*bby", false);
loginUser("sarah", "sarah@bob.com", "b*sar")

// the first :number states the paramater must be a number value, 
// the second :number states that the function must return a number value
function multTwo(num: number):number {
    return num*2;
}

function getValue(myVal: number): string|boolean{
    if (myVal>5) {
        return true;
    }
    return "200 Ok"
}

// same as above but in arrow function
// uses union type which states two potential outputs
let getNewVal = (myVal: number): string|boolean => {
    if (myVal>5) {
        return true;
    }
    return "200 Ok"
}

// take an array
const heros = ["thor", "spiderman", "ironman"]

// use map which applies to each array element
heros.map((hero):string => {
    return `hero is ${hero}`
})


function consoleError(errmsg: string): void {
    console.log(errmsg);
}