const express = require("express");
const routes = require("./api/routes/userRoutes");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
dotenv.config();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(bodyParser.json());
app.use("/api/routes", routes);

app.listen(process.env.PORT, () => {
  console.log(`Server Running at port ${process.env.PORT}`);
});

// module.exports = app;

// // default route
// app.get("/", function (req, res) {
//   return res.send({ error: true, message: "hello" });
// });

// Retrieve all users
// app.get("/user", function (req, res) {
//   dbConn.query("SELECT * FROM user_data", function (error, results, fields) {
//     if (error) throw error;
//     return res.send({ error: false, data: results, message: "users list." });
//   });
// });

// // Retrieve user with id
// app.get("/user/:id", function (req, res) {
//   let user_id = req.params.id;
//   if (!user_id) {
//     return res
//       .status(400)
//       .send({ error: true, message: "Please provide user_id" });
//   }
//   dbConn.query(
//     "SELECT * FROM user_data where id=?",
//     user_id,
//     function (error, results, fields) {
//       if (error) throw error;
//       return res.send({
//         error: false,
//         data: results[0],
//         message: "users list.",
//       });
//     }
//   );
// });
// Add a new user
// app.post("/user", function (req, res) {
//   let user = req.body;
//   console.log(req.body);
//   if (!user) {
//     return res
//       .status(400)
//       .send({ error: true, message: "Please provide user" });
//   }
//   dbConn.query(
//     "INSERT INTO user_data SET ? ",
//     [user],
//     function (error, results, fields) {
//       if (error) throw error;
//       return res.send({
//         error: false,
//         data: results,
//         message: "New user has been created successfully.",
//       });
//     }
//   );
// });
// // //  Update user with id
// app.put("/user", function (req, res) {
//   let user_id = req.body.id;
//   let user = req.body;
//   console.log(user_id, user);
//   if (!user_id || !user) {
//     return res
//       .status(400)
//       .send({ error: user, message: "Please provide user and user_id" });
//   }
//   dbConn.query(
//     "UPDATE user_data SET ? WHERE id = ?",
//     [user, user_id],
//     function (error, results, fields) {
//       if (error) throw error;
//       return res.send({
//         error: false,
//         data: results,
//         message: "user has been updated successfully.",
//       });
//     }
//   );
// });
// // //  Delete user
// app.delete("/user", function (req, res) {
//   let user_id = req.body.id;
//   console.log(user_id);
//   if (!user_id) {
//     return res
//       .status(400)
//       .send({ error: true, message: "Please provide user_id" });
//   }
//   dbConn.query(
//     "DELETE FROM user_data WHERE id = ?",
//     [user_id],
//     function (error, results, fields) {
//       if (error) throw error;
//       return res.send({
//         error: false,
//         data: results,
//         message: "User has been deleted successfully.",
//       });
//     }
//   );
// });

module.exports = app;
