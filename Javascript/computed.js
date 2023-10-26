const readlineSync = require("readline-sync");
const key = readlineSync.question("What do you want ot know? (name/age/city/state):");
const course = readlineSync.question("Which course do you want to learn (html/css/js):");

const obj = {
    name: "Harsh",
    age : 23
}

obj.city = "Mumbai";
obj.state = "MH";
obj.course = course

console.log(obj);