const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Autor = sequelize.define("autor", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      }
    });
  
    return Autor;
  };