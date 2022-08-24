const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('PurchaseOrder', {
        orderN:{
            type: DataTypes.STRING,/* ,
            autoIncrement: true, */
            primaryKey:true,            
        },
        date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW           
        },
        totalPrice: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
    },{
        timestamps:false
    });
;}