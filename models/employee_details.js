'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  employee_details.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    profile_picture: DataTypes.STRING,
    status: DataTypes.ENUM('Active', 'Deleted')
  }, {
    sequelize,
    modelName: 'employee_details',
  });
  return employee_details;
};