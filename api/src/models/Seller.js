const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  
  sequelize.define('Seller', {
    id:{
        primaryKey:true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: {
          msg: "Must be a valid email address",}
        }
    },
    password: {
        type: DataTypes.STRING, // AUTH0 AUTENTICACION!!!
        allowNull: false,
    },
    admin:{
        type:DataTypes.BOOLEAN,
        defaultValue: true,
    }
    
    });
};