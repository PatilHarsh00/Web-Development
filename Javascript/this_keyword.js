/**
 * this keyword
 * Refers to the object that is executing the funtion
 */

const obj = {
    name: "Harsh",
    greetingMsg: function() {
        console.log("Hello " + this.name);  //Implicit Binding
    }
}

obj.greetingMsg();