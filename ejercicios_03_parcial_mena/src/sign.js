'use strict';

function sign(num) {
	var minus = '-';
	var plus = '+';

	if (num<0){
		return minus;
	}
    else {
		return plus;
    }

}

console.log(sign(7));