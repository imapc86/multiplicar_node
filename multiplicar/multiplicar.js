
/******************************** start requieres ******************************/
const fs = require('fs'); 
const colors = require('colors');

/********************************* end requieres *******************************/

let crearArchivo = (base, limite) => {

	return new Promise((resolve, reject) =>{

		//Revisar si lo que se envía no es un numero:

		if (!Number(base) || !Number(limite)) {
			reject(`El valor introducido ${base} no es un número.`);
			return;
		}


		
		let data = '';

		for (let i=1; i<=limite;  i++) {

			data += (`${base} x ${i} =  ${ base * i }\n`);

		}

		fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
			if(err) 
				reject(err);
			else
				resolve(`tabla-${ base }.txt`);
		});

	});
}

/**
* Función creada para la sección 4 clase 34.
* funcion listarTabla()
*/


let listarTabla = (base, limite) =>{


	console.log("==============================".green);
	console.log(`==========Tabla de ${ base }==========`.green);
	console.log("==============================".green);

	for (let i = 1; i <= limite; i++) {
		console.log(`${base} * ${i} =  ${base * i}`);
	}


}


/* 
* La forma de exportar la función. 
* Tambien podría ser directamente en la función:
*  module.exports.crearArchivo = (base) => {.... etc}
*/

module.exports = {
	crearArchivo,
	listarTabla
}