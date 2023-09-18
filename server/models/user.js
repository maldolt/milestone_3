const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;
// user.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // ... your model attributes here
  });
  return User;
};
