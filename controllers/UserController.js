var sql = require("../utils/db");

const retrieveUsers = (req, res) => {
  sql.query("SELECT * FROM Users", function (err, result) {
    if (err) {
      console.error("Error retrieving users:", err);
      return res.status(500).send("Error retrieving users");
    }
    res.send(result);
  });
};

const createUsers = (req, res) => {
  // Validação pode ser adicionada aqui
  sql.query(
    "INSERT INTO Users (UserName, Email, Pass) VALUES (?,?,?)",
    [
      req.body.UserName,
      req.body.Email,
      req.body.Pass
    ],
    function (err, result) {
      if (err) {
        console.error("Error creating user:", err);
        return res.status(500).send("Error creating user");
      }
      res.send(req.body);
    }
  );
};

const retrieveUser = (req, res) => {
  const userID = req.params.ID;

  if (!userID) {
    return res.status(400).send("UserID is required");
  }

  sql.query(
    "SELECT * FROM Users WHERE ID = ?",
    [userID],
    function (err, result) {
      if (err) {
        console.error("Error retrieving user:", err);
        return res.status(500).send("Error retrieving user");
      }
      if (result.length === 0) {
        return res.status(404).send("User not found");
      }
      res.send(result);
    }
  );
};

const deleteUsers = async (req, res) => {
  const userId = req.params.ID; // Obtém o ID do usuário a partir dos parâmetros da requisição

  try {
      // Iniciar uma transação
      await sql.beginTransaction();

      // Excluir registros relacionados na tabela Cart
      await sql.query("DELETE FROM Cart WHERE UserID = ?", [userId]);

      // Excluir o usuário
      await sql.query("DELETE FROM Users WHERE ID = ?", [userId]);

      // Confirmar a transação
      await sql.commit();
      
      res.status(200).send("Usuário excluído com sucesso.");
  } catch (error) {
      // Reverter a transação em caso de erro
      await sql.rollback();
      console.error("Erro ao excluir o usuário:", error);
      res.status(500).send("Erro ao excluir o usuário.");
  }
};

const updateUsers = (req, res) => {
  // Validação pode ser adicionada aqui
  sql.query(
    "UPDATE Users SET UserName = ?, Email = ?, Pass = ? WHERE ID = ?",
    [
      req.body.UserName,
      req.body.Email,
      req.body.Pass,
      req.params.ID
    ],
    function (err, result) {
      if (err) {
        console.error("Error updating user:", err);
        return res.status(500).send("Error updating user");
      }
      res.send(req.body);
    }
  );
};

module.exports = { retrieveUsers, retrieveUser, deleteUsers, updateUsers, createUsers };