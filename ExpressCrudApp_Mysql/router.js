const userController = require("./controllers/usersController");

const path = require("path");
module.exports = (app) => {
  app
    .route("/")
    .get((req, res) =>
      res.sendFile(path.join(__dirname, "public/views/index.html"))
    );

  app.route("/getUsers").get(userController.getAllUsers);

  app.route("/deleteUser/:id").get(userController.deleteUser);

  app.route("/login").get((req, res) => res.send("Login Page"));
};
