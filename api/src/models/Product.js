const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Product', {
        idProduct: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true       
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
    /*         set(value) {
                const newPrice = (value - (value * this.reduction));
                this.setDataValue('price', newPrice)
            } */
        }, 
        image: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0,
        }, 
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        compatible: {
            type: DataTypes.STRING,
            defaultValue: false,
        }, 
        reduction: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
            /* set(value) {
                if(value !== 0)
                this.setDataValue('reduction', value/100)
            } */
        },   
    });
};
