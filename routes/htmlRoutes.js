var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/home", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("home", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/contact", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("contact", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/listing", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("listing", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  app.get("/post", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("post", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });
  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
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
