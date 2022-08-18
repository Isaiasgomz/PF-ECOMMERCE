const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('PurchaseOrder', {
        orderN:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,            
        },
        date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW           
        },
    },{
        timestamps:false
    });
;}