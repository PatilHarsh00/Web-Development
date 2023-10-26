/**
 * Function Borrowing - Call, Apply and Bind
 */

const user1 = {
    name: "Harsh",
    age: "23"
}

const user2 = {
    name: "Tanmay",
    age: "21"
}

const user3 = {
    name: "Suraj",
    age: "26"
}

function sayHi(degree, year) {
    console.log("Hi",this.name, degree, year);
}

sayHi.call(user1, "Btech", 2022);

sayHi.apply(user2, ["B.Com", 2022]);

const result = sayHi.bind(user3, "MBA", 2021);
result();