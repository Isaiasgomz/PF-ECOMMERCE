const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('PersonalData', {
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
      name:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      shippingAddress:{
        type: DataTypes.STRING,
      },
      CP:{
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
};