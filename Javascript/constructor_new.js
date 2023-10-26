/**
 * new keyword and constructor functions
 * 
 * Constructor functions technically are regular functions. They
 * have 2 conventions though. They are name with capital letter first
 * They should be executed only with "new" keyword.
 */

function User(name, age) {
    (this.name = name), (this.age = age)
}

const user1 = new User("Harsh", 23);

console.log(user1.name);
console.log(user1.age);