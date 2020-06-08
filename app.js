const argv = require('./config/yargs').argv
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(error => console.log(error));
        break;
    default:
        console.log('comando no encotrado');
}








// let argv2 = process.argv;
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(argv.limite);
// console.log(argv2);