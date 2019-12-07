module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Products;
};
