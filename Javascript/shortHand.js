// Shorthand properties


function getObject(name, city){
    return {
        name,
        city
    }
}


const student1 = getObject("Harsh", "Mumbai");
console.log(student1);

const student2 = getObject("Suraj", "Kolhapur");
console.log(student2);


// Instead of writing it in key value pair we can direct return the variables. It print out as key value pair