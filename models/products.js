module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    product_name: DataTypes.STRING,
    product_category: DataTypes.STRING,
    product_description: DataTypes.STRING,
    product_image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    seller_name: DataTypes.STRING,
    seller_number: DataTypes.STRING
    // quantity: DataTypes.INTEGER
  });
  return Products;
};
