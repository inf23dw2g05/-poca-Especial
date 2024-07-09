var sql = require("../utils/db");

const addProductToCart = (req, res) => {
  sql.query(
    "INSERT INTO Cart (CartID, productId) VALUES (?,?)",
    [
      req.body.CartID,
      req.body.productId
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const removeProductFromCart = (req, res) => {
  sql.query(
    "DELETE FROM Cart WHERE CartId = ?",
    [req.params.cartId],
    function (err, result) {
      if (err) throw err;
      res.send("Product removed from cart successfully.");
    }
  );
};

const listCartItems = (req, res) => {
  sql.query(
    "SELECT * FROM Cart WHERE CartID = ?",
    [req.params.CartID],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const updateCartItem = (req, res) => {
  // Supondo que haja um campo `quantity` no carrinho, que não está definido no schema fornecido
  sql.query(
    "UPDATE Cart SET quantity = ? WHERE CartId = ?",
    [
      req.body.quantity,
      req.params.cartId
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
