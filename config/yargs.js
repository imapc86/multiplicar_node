/**
* Este archivo es para simplificar el archivo principal.
*/

const opts = {
	base: {
		demand: true,
		alias: 'b',
	},
	limite: {
		alias: 'l',
		default: 10
	}		
}


const argv = require('yargs')
				.command('listar', 'Imprime en consola la tabla de multiplicar', opts)
				.command('crear', 'Genara un archivo segun la base y limite que se asigne', opts)
				.help()
				.argv; 


/*Exportar achivo*/

module.exports={
	argv
}