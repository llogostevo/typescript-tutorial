// user object

type User = {
    readonly _id: string,
    name: string;
    email:  string;
    isActive: boolean;
    credcardDetails?: number;
}


function createUser(user: User) {
    return user;
}

function greet(user: User) {
    return "Hello " + user.name;
  }

let personBob = {_id: "hello", name: "Bob", email: "b@zamora.com", isActive: true}
console.log(greet(personBob));

personBob.name = "Loris";
console.log(greet(personBob));
console.log(personBob._id, personBob.name, personBob.email, personBob.isActive);

let personSarah = {_id: "12sarah", name: "Sarah", email: "s@zamora.com", isActive: true, credcardDetails: 123112312}


console.log(personSarah.credcardDetails)

export{}