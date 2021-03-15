// Wrote code below this line
function function1() {
    var myGlobalVariable = "10";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVariable != "undefined") {
        result += "5: " + notGlobalVariable;
    }
    console.log(result);
}


// Write code above this line

function function2() {
    var result = "";
    if (typeof myGlobalVariable != "undefined") {
        result += "myGlobalVariable: " + myGlobalVariable;
    }
    if (typeof notGlobalVariable != "undefined") {
        result += "notGlobalVariable: " + notGlobalVariable;
    }
    console.log(result);
}

function1();
function2();

module.exports = {
    function1,
    function2
};