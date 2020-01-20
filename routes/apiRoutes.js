const express = require ("express");

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  
  app.get("/allArtwork", function(req, res) {
    db.gallerye_db.findAll({}).then(function(gallerey_db) {
      res.json(gallerey_db);
    });
  });

//   // Create a new example
//   app.post("/api/examples", function(req, res) {
//     db.Example.create(req.body).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });

//   // Delete an example by id
//   app.delete("/api/examples/:id", function(req, res) {
//     db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.json(dbExample);
//     });
//   });
};
``