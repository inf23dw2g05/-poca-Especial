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
    "INSERT INTO Users (UserName, Email, Pass, Rol) VALUES (?,?,?,?)",
    [
      req.body.UserName,
      req.body.Email,
      req.body.Pass,
      req.body.Rol
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

const deleteUsers = (req, res) => {
  console.log("UserID to delete:", req.params.ID);

  sql.query(
    "DELETE FROM Users WHERE ID = ?",
    [req.params.ID],
    function (err, result) {
      if (err) {
        console.error("Error deleting user:", err);
        return res.status(500).send("Error deleting user");
      }
      if (result.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.send("User " + req.params.ID + " successfully deleted");
      }
    }
  );
};

const updateUsers = (req, res) => {
  // Validação pode ser adicionada aqui
  sql.query(
    "UPDATE Users SET UserName = ?, Email = ?, Pass = ?, Rol = ? WHERE ID = ?",
    [
      req.body.UserName,
      req.body.Email,
      req.body.Pass,
      req.body.Rol,
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