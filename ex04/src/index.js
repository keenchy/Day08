// Write code below this line

var myVariable = "I am hiere";

function localScope() {
    var myVariable = "I am hiere";

}

// Only change code above this line

localScope();
console.log(myVariable);

//myVariable not difined outside of localScope


if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable);
} else {
    console.log('outside localscope UNDEFINED!!!')
}
module.exports = localScope;