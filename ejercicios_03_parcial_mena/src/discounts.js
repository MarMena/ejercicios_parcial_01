'use strict';

var blueDress = 500;
var redSocks = 100;
var whiteShirt = 120;
var yellowCoat = 800;

var discountDress = 0.1;
var discountSocks = 0.5;

var total = (blueDress - (blueDress*discountDress)) + (redSocks - (redSocks*discountSocks)) + yellowCoat + whiteShirt;
console.log(total);

