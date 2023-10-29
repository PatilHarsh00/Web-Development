/** Event bubbling and capturing */


let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

para.addEventListener("click", () => {
    alert("Para Tag")
}, true);

div.addEventListener("click", () => {
    alert("Div Tag")
}, true);

form.addEventListener("click", () => {
    alert("Form Tag")
}, true);