const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'.magenta);
    console.log('%%%%%%%%%'.magenta + ` Tabla de ${base} `.yellow + '%%%%%%%%%%'.magenta);
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'.magenta);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
    console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'.magenta);
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('El valor instroducido no es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}