'use strict';

function exchange(amount){

	var amountDollars = amount * 19.26;
	var amountEuros = amount * 21.41;
	var str = 'The amount in dollars is: ' + amountDollars + ', and the amount in euros is: ' + amountEuros + '.';

	return str;
}

var money = 7;
console.log(exchange(money));



