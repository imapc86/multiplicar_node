
/************************************requieres***********************************/

//Existen tres tipos de rquires:

//const fs = require('fs');         // Librerías propias de node
//const ex = require('express');   //  Paquetes que se instalan no nativos de node
//const self = require('./fs');   //   Archivos que nosotros escribimos

/************************************requieres***********************************/


/*
let base = 3;

let data = '';

for (let i=1; i<=10;  i++) {

	data += (`${base} x ${i} =  ${ base * i }\n`);

}

fs.writeFile('tablas/tabla-2.txt', data, (err) => {
	if(err) throw err;
	console.log('El archivo tabla-2.txt ha sido grabado');
});
*/


/* 
* También es posible guardar en otro directorio con ../ ó ./ dependiendo
* donde se encuentre eldirectorio al que queremos acceder.
* Se puede grabar cada archivo de la siguiente forma: 
*/

/*
fs.writeFile(`tabla/tabla-${base}.txt`, data, (err) => { 
	if(err) throw err;
	console.log(`El archivo tabla-${base}.txt ha sido grabado`);
});

*/

/**********************************************************************************************
*
* Vamos a comentar todo el código para que se llame desde la función crearArchivo en el archivo
* multiplicar.js
*
***********************************************************************************************/ 


//const multiplicar = require('./multiplicar/multiplicar');

/*
* Destructuración para no tener que solicitar la función como: multiplicar.crearArchivo();
* si no solo el nombre de la función.
*/

//const { crearArchivo } = require('./multiplicar/multiplicar');


/*Comentamos la variable base para poder usarla como entrada con el objeto process*/

//   let base = '2';


/**
* process es una variable de entorno que crea node, tal y como module.
* Ese objeto tiene dos argumentos nada mas (ubicacion de node[0] y ubicacion del archivo[1]), 
* Si enviamos otro argumento lo podemos captar con el indice: [2], 
*/

//let argv = process.argv;

//let parametro = argv[2];


/**
* Guardamos ahora la base  separando el string que esta en el parametro antes y despues del
* simbolo de igual que quedaria un arreglo así:  ['--base', '5']
* Despues solo guardamos el segundo elemento del arreglo
*/


/*let base = parametro.split('=')[1];


crearArchivo(base)
	.then(archivo => console.log(`Archivo creado: ${ archivo }`))
	.catch(e=>console.log(e));
*/

/**********************************************************************************************
*
* Se comenta el código para empezar a utilizar Yargs y que sea más funcional la aplicación 
* que estabamos realizando.
*
***********************************************************************************************/ 

// No se necesita poner la ubicación porque es un paquete creado para node.
//

/*
const argv = require('yargs')
					.command('listar', 'Imprime en consola la tabla de multiplicar', {
						base: {
							demand: true,
							alias: 'b',
						},
						limite: {
							alias: 'l',
							default: 10
						}
					})
					.command('crear', 'Genara un archivo segun la base y limite que se asigne', {
						base: {
							demand: true,
							alias: 'b',
						},
						limite: {
							alias: 'l',
							default: 10
						}			
					})
					.help()
					.argv; 

const { crearArchivo ,listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${ archivo }`))
			.catch(e=>console.log(e));
		break;
	default:
		console.log('comando no reconocido');
}
*/

/**********************************************************************************************
*
* Se comenta el código porque la aplicación principal debe ser más sencilla para mantener,
* se guardan las configuraciones en otro archivo.
*
***********************************************************************************************/ 


const argv = require('./config/yargs').argv;
const { crearArchivo ,listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch( comando ){
	case 'listar':
		listarTabla(argv.base, argv.limite);
		break;
	
	case 'crear':
		crearArchivo(argv.base, argv.limite)
			.then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
			.catch(e=>console.log(e));
		break;
	default:
		console.log('comando no reconocido');
}





