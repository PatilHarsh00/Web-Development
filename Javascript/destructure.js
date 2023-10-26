const employees = {
    engineers: {
        em1 : {
            id: 1,
            name: "Harsh Patil",
            occupation: "Fullstack Developer"
        },
        em2 : {
            id: 2,
            name: "Shreyan Sawant",
            occupation: "Data Scientist"
        }
    },
    placement: {
        em3: {
            id: 3,
            name: "MS Dhoni",
            occupation: "Sr Executive"
        }
    },
    youtube: {
        em4: {
            id: 4,
            name: "Rohit Sharma",
            occupation: "Youtube Manager"
        }
    }
}

// let {engineers: {em1: {name, occupation}}} = employees;
// console.log(name, occupation);

let {youtube: {em4: {name, occupation}}} = employees;
console.log(name, occupation);