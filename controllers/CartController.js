var sql = require("../utils/db");

const addProductToCart = (req, res) => {
  sql.query(
    "INSERT INTO Cart (UserID, ProductID, Quantity) VALUES (?,?,?)",
    [
      req.body.UserID,
      req.body.ProductID,
      req.body.Quantity
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const removeProductFromCart = (req, res) => {
  sql.query(
    "DELETE FROM Cart WHERE ID = ?",
    [req.params.ID],
    function (err, result) {
      if (err) throw err;
      res.send("Product removed from cart successfully.");
    }
  );
};

const listCartItems = (req, res) => {
  sql.query(
    "SELECT * FROM Cart",
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const updateCartItem = (req, res) => {
  sql.query(
    "UPDATE Cart SET Quantity = ? WHERE ID = ?",
    [
      req.body.Quantity,
      req.params.ID
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {
  addProductToCart,
  removeProductFromCart,
  listCartItems,
  updateCartItem
};