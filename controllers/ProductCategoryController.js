var sql = require("../utils/db");

const retrieveProductCategories = (req, res) => {
  sql.query("SELECT * FROM ProductCategories", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createProductCategory = (req, res) => {
  sql.query(
    "INSERT INTO ProductCategories (CategoryName) VALUES (?)",
    [
      req.body.CategoryName
    ], 
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveProductCategory = (req, res) => {
  sql.query(
    "SELECT * FROM ProductCategories WHERE ID = ?",
    [req.params.ID], 
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteProductCategory = (req, res) => {
  sql.query(
    "DELETE FROM ProductCategories WHERE ID = ?", 
    [req.params.ID], 
    function (err, result) {
      if (err) throw err;
      res.send("Category " + req.params.ID + " successfully deleted.");
    }
  );
};

const updateProductCategory = (req, res) => {
  sql.query(
    "UPDATE ProductCategories SET CategoryName = ? WHERE ID = ?",
    [
      req.body.CategoryName, 
      req.params.ID
    ], function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {
  retrieveProductCategories, 
  retrieveProductCategory, 
  deleteProductCategory, 
  updateProductCategory, 
  createProductCategory
};