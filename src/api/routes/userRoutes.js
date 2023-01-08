const express = require("express");
const {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const validateUser = require("./../validations/userValidations");
const router = express.Router();
const { check } = require("express-validator");

router.route("/register").post(validateUser, createUser);
router.route("/createUser").post(validateUser, createUser);
router.route("/getUsers").get(validateUser, getUsers);
router.route("/updateUser/:id").put(validateUser, updateUser);
router.route("/deleteUser/:id").delete(validateUser, deleteUser);

module.exports = router;
