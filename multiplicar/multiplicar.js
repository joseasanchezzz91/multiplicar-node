const fs = require('fs');
const colors = require('colors');
let data = ''

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido  ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido  ${limite} no es un numero`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

let listarTabla = (base, limite) => {

    console.log('===================================='.yellow)
    console.log(`tabla de ${base}`.blue)
    console.log('===================================='.red)

    for (let i = base; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} `);

    }
}



module.exports = {
    crearArchivo,
    listarTabla
}