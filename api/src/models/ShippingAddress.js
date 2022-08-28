const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ShippingAddress', {
    reference: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,   
      defaultValue: "0",   
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING,
      defaultValue: "0",  
    },
  }, {
    timestamps: false
  });
};