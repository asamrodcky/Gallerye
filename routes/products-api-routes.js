var db = require("../models");

module.exports = function (app) {
  // Get all artwork
  app.get("/api/allArtwork", function (req, res) {
    db.Products.findAll({
      order: [["createdAt", "ASC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // var query = {};
  // if (req.query.Customers_id) {
  //   query.Customers = req.query.Customers;
  // }

  // Get all artwork in ascending price order
  app.get("/api/allArtwork/priceLowtoHigh", function (req, res) {
    db.Products.findAll({
      order: [["price", "ASC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // Get all artwork in descending price order
  app.get("/api/allArtwork/priceHightoLow", function (req, res) {
    db.Products.findAll({
      order: [["price", "DESC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // Get all artwork in ascending year order
  app.get("/api/allArtwork/yearOldesttoNewest", function (req, res) {
    db.Products.findAll({
      order: [["year", "ASC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // Get all artwork in descending year order
  app.get("/api/allArtwork/priceNewesttoOldest", function (req, res) {
    db.Products.year({
      order: [["price", "DESC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  // Get all by Artist
  app.get("/api/allArtwork/:artist", function (req, res) {
    db.Products.findAll({
      where: {
        artist: req.params.artist
      },
    }).then(function (dbProducts) {
      console.log(req.params.artist)
      res.json(dbProducts);
    });
  });

  //Get all by Title
  app.get("/api/byTitle", function (req, res) {
    db.Products.findAll({
      order: [["product_name", "ASC"]]
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });

  //Get one by Title
  app.get("/api/product/:id", function (req, res) {
    db.Products.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProducts) {
      res.json(dbProducts);
    });
  });
  app.put("/api/product", function (req, res) {
    db.Products.update({
      sold: req.body.sold
    },
      {where: {
          id: req.body.id
        }
      }).then(function(dbProducts) {
        res.json(dbProducts);
      })
        .catch(function(err) {
          res.json(err);
        });
  });

};