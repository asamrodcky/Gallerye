var db = require("../models");
var path = require("path");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "../views/index.html"));

  });
  //routes for pictures serving
  app.get("/public/images/:filename", function (req, res) {
    // console.log(req.filename);
    res.sendFile(path.join(__dirname, "../public/images/" + req.params.filename));

  });

  app.get("/allArtwork", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/artwork.html"));
  });
  app.get("/sell", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/sell.html"));
  });

  app.get("/account", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/account.html"));
  });
  app.get("/product", function (req, res) {
    res.sendFile(path.join(__dirname, "../views/product.html"));
  });

  // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // app.get("*", function (req, res) {
  //   res.render("404");
  // });
};
