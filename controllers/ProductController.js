var sql = require("../utils/db");

const retrieveProducts = (req, res) => {
  sql.query("SELECT * FROM Products", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createProduct = (req, res) => {
  sql.query(
    "INSERT INTO Products (ProductName, CategoryID) VALUES (?, ?)",
    [
      req.body.ProductName,
      req.body.CategoryID
    ], 
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveProduct = (req, res) => {
  sql.query(
    "SELECT * FROM Products WHERE ID = ?",
    [req.params.ID], 
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteProduct = (req, res) => {
  sql.query(
    "DELETE FROM Products WHERE ID = ?", 
    [req.params.ID], 
    function (err, result) {
      if (err) throw err;
      res.send("Product " + req.params.ID + " successfully deleted.");
    }
  );
};

const updateProduct = (req, res) => {
  sql.query(
    "UPDATE Products SET ProductName = ?, CategoryID = ? WHERE ID = ?",
    [
      req.body.ProductName, 
      req.body.CategoryID,
      req.params.ID
    ], function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {
  retrieveProducts, 
  retrieveProduct, 
  deleteProduct, 
  updateProduct, 
  createProduct
};