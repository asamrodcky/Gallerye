var db = require("../models");

module.exports = function (app) {
 
  // Create a new customer
  app.post("/api/customer", function (req, res) {
    db.Customers.create(req.body).then(function (dbCustomers) {
      res.json(dbCustomers);
    });
  });
};

