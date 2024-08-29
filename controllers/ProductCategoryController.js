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

const deleteProductCategory = async (req, res) => {
  const categoryId = req.params.ID; // Obtém o ID da categoria a partir dos parâmetros da requisição

  try {
      // Iniciar uma transação
      await sql.beginTransaction();

      // Excluir produtos relacionados à categoria
      await sql.query("DELETE FROM Products WHERE CategoryID = ?", [categoryId]);

      // Excluir a categoria
      await sql.query("DELETE FROM ProductCategories WHERE ID = ?", [categoryId]);

      // Confirmar a transação
      await sql.commit();
      
      res.status(200).send("Categoria de produto excluída com sucesso.");
  } catch (error) {
      // Reverter a transação em caso de erro
      await sql.rollback();
      console.error("Erro ao excluir a categoria de produto:", error);
      res.status(500).send("Erro ao excluir a categoria de produto.");
  }
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