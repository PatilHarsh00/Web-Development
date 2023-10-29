let startBtn = document.querySelector(".start");
let countBtn = document.querySelector(".count");
let value = 0;
let input = document.querySelector(".input")

function showMsg(){
    console.log("Start is clicked")
}

startBtn.addEventListener("click", showMsg)

startBtn.addEventListener("click", () => {
    if(startBtn.innerText === "Start"){
        startBtn.innerText = "Begin";
    }
    else{
        startBtn.innerText = "Start";
        value = 0;
    }
});

countBtn.addEventListener("click", () => {
    value++;
    startBtn.innerText = value;
});

// input.addEventListener("change", () => {
//     console.log(input.value);
// });
//focus, keyup
// input.addEventListener("input", () => {
//     console.log(input.value);
// });

/** Mouse Event*/

// input.addEventListener("mousedown", (event) => {
//     console.log(event.button);
// });

document.addEventListener("mousedown", (event) => {
    let xcor = event.pageX;
    let ycor = event.pageY;

    let cor = `X cor: ${xcor}, Y cor: ${ycor}`;

    console.log(cor);
})

// input.addEventListener("mousedown", (event) => {
//     let xcor = event.pageX;
//     let ycor = event.pageY;

//     let cor = `X cor: ${xcor}, Y cor: ${ycor}`;

//     console.log(cor);
// });

