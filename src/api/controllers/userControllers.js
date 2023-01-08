// const asyncHandler = require("express-async-handler");
// const { User } = require("../models/userModel");
const db = require("./../../config/db");
const pool = require("./../../config/db");

// check for user email before entry
const createUser = (req, res) => {
  let user = req.body;
  if (!user) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user" });
  }
  db.query(
    "INSERT INTO " + process.env.TABLE + " SET ? ",
    [user],
    function (error, results, fields) {
      if (error) {
        console.log(error);
        return res.send({
          error: error,
        });
      } else
        return res.status(201).send({
          error: false,
          data: results,
          message: "New user has been created successfully.",
        });
    }
  );
};

const getUsers = (req, res) => {
  db.query(
    "SELECT * FROM " + process.env.TABLE,
    function (error, results, fields) {
      if (error) throw error;
      return res.status(200).send({
        error: false,
        data: results,
        message: "users list.",
      });
    }
  );
};
const updateUser = (req, res) => {
  let user_id = req.body.id;
  let user = req.body;
  console.log(user_id, user);
  if (!user_id || !user) {
    return res
      .status(400)
      .send({ error: user, message: "Please provide user and user_id" });
  }
  db.query(
    "UPDATE " + process.env.TABLE + " SET ? WHERE id = ?",
    [user, user_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "user has been updated successfully.",
      });
    }
  );
};
const deleteUser = (req, res) => {
  let user_id = req.params.id;
  if (!user_id) {
    return res
      .status(400)
      .send({ error: true, message: "Please provide user_id" });
  }
  db.query(
    "DELETE FROM " + process.env.TABLE + " WHERE id = ?",
    [user_id],
    function (error, results, fields) {
      if (error) throw error;
      return res.send({
        error: false,
        data: results,
        message: "User has been deleted successfully.",
      });
    }
  );
};

module.exports = { createUser, getUsers, updateUser, deleteUser };
