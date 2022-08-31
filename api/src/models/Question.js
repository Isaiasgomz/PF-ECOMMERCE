const {DataTypes} = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Question', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true 
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW           
        },
        status:{
            type: DataTypes.ENUM('No vista','Respondida','En espera'),
            defaultValue:'No vista'
        }
    },{
        timestamps:false
    });
};