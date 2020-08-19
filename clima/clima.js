const axios = require('axios');


const getClima = async( lat, lng ) => {
    const miKey = '8586ad044608e593ea7de5787b3a9f8a';
    const url = `https://api.openweathermap.org/data/2.5/weather`

    const resp = await( axios.get(`${url}?lat=${lat}&lon=${lng}&appid=${miKey}`) );

    if( resp.data.length === 0 ){
        throw new Error('Error en los datos');
    }
    const temp = resp.data.main.temp

    const celcius = ( grados ) => {
        const kelvin = 273.15;
        const convercion = grados - kelvin;
        return `${Math.round(convercion)}°C`;
    }

    return celcius(temp);

}

module.exports = {
    getClima
}