var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
    db.Products.findAll({}).then(function(dbExamples) {
      res.render("home", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // app.get("/home", function(req, res) {
  //   res.render("home", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Products.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
