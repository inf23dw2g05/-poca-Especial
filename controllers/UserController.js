var sql = require("../utils/db");

const retrieveUsers = (req, res) => {
  sql.query("SELECT * FROM Users", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createUsers = (req, res) => {
  sql.query(
    "INSERT INTO Users (UserName, Email, Pass, Rol) VALUES (?,?,?,?)",
    [
      req.body.UserName,
      req.body.Email,
      req.body.Pass,
      req.body.Rol
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveUser = (req, res) => {
  const userID = req.params.ID; // Adjusted to match route parameter

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
  console.log("UserID to delete:", req.params.ID); // Log para verificar o UserID

  sql.query(
    "DELETE FROM Users WHERE ID = ?",
    [req.params.ID],
    function (err, result) {
      if (err) {
        console.error("Error deleting user:", err); // Log para verificar erros
        res.status(500).send("Error deleting user");
        return;
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
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveUsers, retrieveUser, deleteUsers, updateUsers, createUsers};