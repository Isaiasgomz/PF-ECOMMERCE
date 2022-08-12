const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('product', {
        id:{
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }, 
        image: {
            type: DataTypes.STRING, 
            allowNull: false,
        }, 
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        qualification: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                max:5,
                min:1
            }
        }, 
        reviews: {
            type: DataTypes.TEXT,
        }, 
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue:0
        }, 
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
