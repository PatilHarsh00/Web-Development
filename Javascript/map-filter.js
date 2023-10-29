const arr = [1,2,3,4,5];

function square(num){
    return num ** 2;
}

const output = arr.map(square);
console.log(output);

const sqr = arr.map((number) => number ** 2);
console.log(sqr);