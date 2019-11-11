const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=2c90329369e2796b55dfaaf5f84ed149&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}