'use strict';

function averageGrade(grade1,grade2,grade3) {
	var aGrade = 'The average grade is: ' + (grade1 + grade2 + grade3) / 3 + '.';
	return aGrade;
}

console.log(averageGrade(9,9,10));