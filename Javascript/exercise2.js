// Encode the given message
// geeks -> iffmu

const str = "geeks"
let encode = "";

for(let i=0 ; i<str.length ; i++){
    encode += String.fromCharCode(str.charCodeAt(i)+2);
}

console.log(encode);