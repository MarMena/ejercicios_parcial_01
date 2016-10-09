'use strict';

var contacts = [{
	name : 'Cesar',
	homeTel : '5353-5353',
	workTel : '552-2222',
	cel : '04455-345612',
	address : 'Tlalpan 34'

},
{
	name : 'Mario',
	homeTel : '5152-5354',
	workTel : '01800-666',
	cel : '04455-55555',
	address : 'Mazatlan 81'

},
{
	name : 'Santiago',
	homeTel : '5198-1287',
	workTel : '5567-8976',
	cel : '04455-447788',
	address : 'Nuevo Leon 61'

},
{
	name : 'Pach',
	homeTel : '1198-5233',
	workTel : '5578-2828',
	cel : '04455-336789',
	address : 'Observatorio 112'

}
];

function nameStarts(letter) {
	for (var i = 0; i < contacts.length; i++) {
		if (contacts[i].name.substring(0,1) === letter ){
		return contacts[i].name;
	    }
	}
}

console.log(nameStarts('C'));