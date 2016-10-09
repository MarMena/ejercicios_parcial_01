'use strict';

function reverseArray(array) {
    var reversed = [];
    for(var i = array.length-1; i >= 0; i--) {
        reversed.push(array[i]);
    }
    return reversed;
}

var stuff = [3,4,'t',6];
console.log(reverseArray(stuff));