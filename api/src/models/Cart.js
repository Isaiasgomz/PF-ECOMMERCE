const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Cart', {
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true,
      validate: {
        isEmail: {
          msg: "Debe ser un email válido",
        }
      }
    },
    idProduct: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }); 
};
