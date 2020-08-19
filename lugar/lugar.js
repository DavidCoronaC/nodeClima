const axios = require('axios');

const getLugarLtLg = async( dir ) => {

    const encodedURL = encodeURI( dir );
    const miKey = '59862586718774173083x27103';
    const url = 'https://geocode.xyz/'
    
    const instance = axios.create({
        baseURL: `${url}?locate=location?city=${ encodedURL }&auth=${miKey}&json=1`
      });
    
      const resp = await( instance.get());

      if ( resp.data.length === 0) {
          throw new Error(`No se encontro la direccion ${ dir }`)
      } 
      const data      = resp.data;
      const direccion = `${data.standard.city}, ${data.standard.countryname}`;
      const lat       = data.latt;
      const lng       = data.longt;
      
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLtLg
}
