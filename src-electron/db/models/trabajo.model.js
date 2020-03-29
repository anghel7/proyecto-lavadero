module.exports = (sequelize, Sequelize) => {
  const Trabajo = sequelize.define("trabajo", {
    marca: {
      type: Sequelize.STRING
    },
    propietario: {
      type: Sequelize.STRING
    },
    fecha: {
      type: Sequelize.STRING
    }
  });
  return Trabajo;
};