'use strict';

function distance(x1,y1,x2,y2) {
	var dPoints = Math.sqrt((Math.pow((x2-x1),2)+(Math.pow((y2-y1),2))));
    return dPoints;
}

console.log(distance(8,3,9,4));