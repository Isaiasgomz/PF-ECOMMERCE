const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PersonalData', {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shippingAddress: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      /* defaultValue: '' */
    },
    city: {
      type: DataTypes.STRING/* ,
      allowNull: false */
    },
    country: {
      type: DataTypes.STRING/* ,
      allowNull: false */
    },
    CP: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telephone: {
      type: DataTypes.STRING
    },
    department: {
      type: DataTypes.STRING,
      
    },
  }, {
    timestamps: false
  });
};