var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/products", function(req, res) {
    db.Products.findAll({}).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Create a new example
  app.post("/api/sell", function(req, res) {
    db.Products.create(req.body).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Delete an example by id
  app.delete("/api/products/:id", function(req, res) {
    db.Products.destroy({ where: { id: req.params.id } }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
};
