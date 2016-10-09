'use strict';

function name(father,mother,myName) {
	var familyName = myName + ', you are the daughter/son of ' + father + ' and ' + mother + '.';
	return familyName;
}

console.log(name('Juan','Maria','Mena'));