const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // en caso de ser creado por nosotros
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spoonacularScore: { // puntuacion del plato
      type: DataTypes.INTEGER,
    },
    healthScore: { // Nivel de "comida saludable"
      type: DataTypes.INTEGER,
    },
    analyzedInstructions: { // paso a paso
      type: DataTypes.JSON, // VEREMOS DIJO EL CIEGO
    },
    image : {
      type: DataTypes.STRING,
    }
  });
};