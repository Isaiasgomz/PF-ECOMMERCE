const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                isEmail: {
                msg: "Debe ser un email válido"}
            },
        }, 
        idProduct: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        review: {
            type: DataTypes.TEXT,
        },
    });
};