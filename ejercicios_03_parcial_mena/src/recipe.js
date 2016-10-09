'use strict';

var receta = {
	titulo: 'Receta de sopa instantanea',
	elementos: {ingredientes: ['Sopa instantanea', 'Agua'], cantidad: [1,3.2], herramientas: ['Plato','Tenedor','Fuego']},
	dificultad: 'Media',
	tiempo: '24 minutos - 7 horas',
	pasos: {paso1: 'Calentar agua', paso2: 'Poner el agua caliente sobre la sopa', paso3: 'Poner la sopa en el plato', paso4: 'Ponerle un tenedor a la sopa en el plato'}
};

console.log('Titulo: ' + receta.titulo);
console.log('Ingredientes: ' + receta.elementos.ingredientes);
console.log('Cantidades: ' + receta.elementos.cantidad);
console.log('Herramientas: ' + receta.elementos.herramientas);
console.log('Dificultad: ' + receta.dificultad);
console.log('Tiempo de preparacion: ' + receta.tiempo);
console.log('Paso 1: ' + receta.pasos.paso1);
console.log('Paso 2: ' + receta.pasos.paso2);
console.log('Paso 3: ' + receta.pasos.paso3);
console.log('Paso 4: ' + receta.pasos.paso4);