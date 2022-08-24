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
        status :{
            type: DataTypes.ENUM('Procesando Pago','Preparando Envio', 'Enviado','Completado'),
            defaultValue: 'Procesando Pago'
        },
    },{
        timestamps:false
    });
;}