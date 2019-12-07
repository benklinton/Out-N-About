module.exports = function(sequelize, DataTypes) {
  var Products = sequelize.define("Products", {
    product_name: DataTypes.STRING,
    product_catagory: DataTypes.STRING,
    product_description: DataTypes.TEXT,
    product_image_link: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER
  });
  return Products;
};
