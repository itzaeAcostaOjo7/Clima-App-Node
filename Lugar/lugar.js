const axios = require('axios');
const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: { 'x-rapidapi-key': 'a044daf4a8mshd3030bb605a155fp13e2dbjsn083e54ed5375' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para: ${dir}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}
module.exports = {
    getLugarLatLng
}