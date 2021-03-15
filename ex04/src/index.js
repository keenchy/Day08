// Wrote code below this line

function localScope() {}

// Write code above this line

//myVariable not difined outside of localScope


if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable);
} else {
    console.log('outside localscope UNDEFINED!!!')
}
module.exports = localScope;