const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* nombre
email
contraseña
carrito
domicilio */
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Customer', {
    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "tiene que ser un email valido",
        }
      }
    },
    password: {
      type: DataTypes.STRING, // AUTH0 AUTENTICACION!!!
      allowNull: false,
    },
    cart: {
      type: DataTypes.STRING, //VER
      defaultValue: 'el carrito esta vacio'
    },
    address: {
      type: DataTypes.STRING, //VER
      allowNull: false,
    },
  });
};
