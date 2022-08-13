const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Review', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                msg: "Debe ser un email válido"}
            },
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
    },{
        timestamps:false
    });
};