// Only change code below this line

var sum = 0;

function addThree() {

    sum = 3;
    return sum;
}


function addFive() {

    sum = 5;
    return sum;
}



console.log(addThree());
console.log(addFive());

//Only changed code above this line

module.expors = {
    addThree,
    addFive
}