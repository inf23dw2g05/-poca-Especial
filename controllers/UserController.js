var sql = require("../utils/db");

const retrieveUsers = (req, res) => {
  sql.query("SELECT * FROM Users", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createUsers = (req, res) => {
  sql.query(
    "INSERT INTO Users (UserID, UserName, Email, Pass, Rol) Values (?,?,?,?,?)",
    [
      req.body.UserID,
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
    sql.query(
    "SELECT * FROM Users WHERE UserID = ?",
    [req.params.UserID],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteUsers = (req, res) => {
  console.log("UserID to delete:", req.params.UserID); // Log para verificar o UserID

  sql.query(
    "DELETE FROM Users WHERE UserID = ?",
    [req.params.UserID],
    function (err, result) {
      if (err) {
        console.error("Error deleting user:", err); // Log para verificar erros
        res.status(500).send("Error deleting user");
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).send("User not found");
      } else {
        res.send("User " + req.params.UserID + " successfully deleted");
      }
    }
  );
};

const updateUsers = (req, res) => {
  sql.query(
    "UPDATE Users SET UserName = ?, Email = ?, Pass = ?, Rol = ? WHERE UserID = ?",
    [
      req.body.UserName,
      req.body.Email,
      req.params.UserID,
      req.body.Pass,
      req.body.Rol
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {retrieveUsers, retrieveUser, deleteUsers, updateUsers, createUsers};