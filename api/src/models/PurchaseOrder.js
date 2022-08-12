const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('PurchaseOrder', {
        orderN:{
            type: DataTypes.INTEGER,
            primaryKey:true,            
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,            
            validate: {
                isEmail: {
                msg: "Debe ser un email válido",
                }
            }
        },
        date:{
            type: DataTypes.DATEONLY,           
        },
    });
;}