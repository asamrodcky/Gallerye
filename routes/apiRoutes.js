const express = require ("express");

var db = require("../models");

module.exports = function(app) {
  // Get all examples

  app.get("/api/allArtwork", function(req, res) {
    db.Products.findAll({
      order: [["createdAt", "ASC"]]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
// Get all by Artist
  app.get("/api/byArtist", function(req, res) {
    db.Products.findAll({
      order: [["artist", "ASC"]]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
//Get all by year
  app.get("/api/byYear", function(req, res) {
    db.Products.findAll({
      order: [["year", "ASC"]]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
  //Get all by Title
  app.get("/api/byTitle", function(req, res) {
    db.Products.findAll({
      order: [["product_name", "ASC"]]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });
  //Get all by Price
  app.get("/api/byPrice", function(req, res) {
    db.Products.findAll({
      order: [["price", "DESC"]]
    }).then(function(dbProducts) {
      res.json(dbProducts);
    });
  });

  // Create a new customer
  app.post("/api/customer", function(req, res) {
    db.Customers.create(req.body).then(function(dbCustomers) {
      res.json(dbCustomers);
    });
  });
  // app.post("/api/customer", function(req, res) {
  //   console.log("Customer Data:");
  //   console.log(req.body);
  //   Customer.create({
  //     first_name: req.body.first_name,
  //     email: req.body.email,
  //   }).then(function(results) {
  //     res.json(results);
  //   });
  // });
  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};

