'use strict';

function firstElements(arraySrc, nElements) {
	var arrayDst = [];
	for (var i = 0; i < nElements; i++) {
		arrayDst.push(arraySrc[i]);
	}
	return arrayDst;
}

console.log(firstElements(['f','g','c'],2));