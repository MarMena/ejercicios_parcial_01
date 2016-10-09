'use strict';

function min(num1,num2,num3,num4,num5) {
	if (num1 < num2 && num1 < num3 && num1 < num4 && num1 < num5) {
		return num1;
	} else if (num2 < num1 && num2 < num3 && num2 < num4 && num2 < num5) {
        return num2;
	} else if (num3 < num1 && num3 < num2 && num3 < num4 && num3 < num5) {
        return num3;
	} else if (num4 < num1 && num4 < num2 && num4 < num3 && num4 < num5) {
        return num4;
	} else {
        return num5;
	}
}

console.log(min(3,-6,-1,7,8));