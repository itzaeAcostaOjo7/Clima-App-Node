const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);
// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);
const getInfo = async(direccion) => {
    try {
        const cordenadas = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(cordenadas.lat, cordenadas.lng);
        return `El clima de ${cordenadas.direccion} es de ${temp}.`;
    } catch (e) {
        return `No existen datos para ${direccion}`;
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);