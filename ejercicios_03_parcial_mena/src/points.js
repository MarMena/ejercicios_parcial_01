'use strict';

var point1 = { x: 2, y: -4 };
var point2 = { x: -5, y: 8 };
var point3 = { x: 10, y: 23 };
var point4 = { x: 12, y: -24 };
var point5 = { x: 2, y: -4 };

function isEqual(v1,v2) {
	if (v1.x === v2.x && v1.y === v2.y ){
		return 'The vectors are equal.';
	} else {
		return 'The vectors are not equal.';
	}
}

function distanceVectors(v1,v2) {
	var distance = Math.sqrt((Math.pow((v2.x-v1.x),2)+(Math.pow((v2.y-v1.y),2))));
	return 'The distance between the vectors is: ' + distance + '.';
}

console.log(isEqual(point5,point1));
console.log(distanceVectors(point1,point4));