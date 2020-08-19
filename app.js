const lugar = require("./lugar/lugar").getLugarLtLg;
const clima = require("./clima/clima").getClima;

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "direccion de la ciudad",
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    let dir = await lugar(direccion);
    let tem = await clima(dir.lat, dir.lng);
    return ` El clima en ${dir.direccion}, es de ${tem}`;
  } catch (error) {
      return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(console.log)
  .catch( console.log );
