var sql = require("../utils/db");

const retrieveProducts = (req, res) => {
  sql.query("SELECT * FROM Products", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createProduct = (req, res) => {
  sql.query(
    "INSERT INTO Products (ID, Name_products, Description_products, Price, CategoryID) VALUES (?, ?, ?, ?, ?)",
    [
      req.body.ID,        
      req.body.Name_products, 
      req.body.Description_products,                 
      req.body.Price,            
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

const deleteProduct = async (req, res) => {
  const productId = req.params.ID; // Obtém o ID do produto a partir dos parâmetros da requisição

  try {
      // Verifica se o produto está em uso no carrinho
      const cartCheckQuery = "SELECT COUNT(*) AS count FROM Cart WHERE ProductID = ?";
      const cartCheckResult = await new Promise((resolve, reject) => {
          sql.query(cartCheckQuery, [productId], (err, result) => {
              if (err) reject(err);
              else resolve(result);
          });
      });

      // Verifique o que está sendo retornado
      console.log(cartCheckResult); // Para depuração

      if (cartCheckResult[0].count > 0) {
          return res.status(400).send("Não é possível excluir o produto, pois ele está em uso no carrinho.");
      }

      // Excluir o produto
      await new Promise((resolve, reject) => {
          sql.query("DELETE FROM Products WHERE ID = ?", [productId], (err, result) => {
              if (err) reject(err);
              else resolve(result);
          });
      });

      res.status(200).send("Produto excluído com sucesso.");
  } catch (error) {
      console.error("Erro ao excluir o produto:", error); // Log do erro para depuração
      res.status(500).send("Erro ao excluir o produto.");
  }
};



const updateProduct = (req, res) => {
  sql.query(
    "UPDATE Products SET Name_products = ?, Description_products = ?, Price = ?, CategoryID = ? WHERE ID = ?",
    [
      req.body.Name_products, 
      req.body.Description_products,
      req.body.Price,
      req.body.CategoryID,
      req.params.ID
    ], 
    function (err, result) {
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