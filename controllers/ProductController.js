var sql = require("../utils/db");

const retrieveProductCategories = (req, res) => {
  sql.query("SELECT * FROM ProductCategories", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createProductCategory = (req, res) => {
  sql.query(
    "INSERT INTO ProductCategories (CategoryID, CategoryName) VALUES (?,?)",
    [
      req.body.CategoryID,
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
    "SELECT * FROM ProductCategories WHERE CategoryID = ?",
    [req.params.CategoryID], 
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteProductCategory = (req, res) => {
    sql.query(
    "DELETE FROM ProductCategories WHERE CategoryID = ?", 
    [req.params.CategoryID], 
    function (err, result) {
      if (err) throw err;
      res.send("Category " + req.params.CategoryID + " successfully deleted.");
    }
  );
};

const updateProductCategory = (req, res) => {
  sql.query(
    "UPDATE ProductCategories SET CategoryName = ? WHERE CategoryID = ?",
    [req.body.CategoryName, req.params.CategoryID], function (err, result) {
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
