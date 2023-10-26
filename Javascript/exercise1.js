function calSum(min, max){
    let sum = 0;
    for(let i=min ; i<=max ; i++){
        sum += i;
    }

    return sum;
}

const result = calSum(1,20);

console.log(result);