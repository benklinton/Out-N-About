var db = require("../models");

module.exports = function(app) {
    // Get all examples
    app.get("/api/products", function(req, res) {
        db.Products.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // Create a new example
    app.post("/api/sell", function(req, res) {
        db.Products.create({
            product_name: req.body.product_name,
            product_category: req.body.product_category,
            product_description: req.body.product_description,
            product_image_link: req.body.product_image_link,
            price: req.body.price,
            seller_name: req.body.seller_name,
            seller_number: req.body.seller_number
        }).then(function(data) {
            res.json(data);
        });
    });

    // Delete an example by id
    app.delete("/api/Products/:id", function(req, res) {
        db.Products.destroy({ where: { id: req.params.id } }).then(function(data) {
            res.json(data);
            console.log(res.json(data));
        });
    });
};