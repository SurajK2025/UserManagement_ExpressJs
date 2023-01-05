const userController = require("./controllers/usersController");

const path = require("path");
module.exports = (app) => {
  app.route("/").get((req, res) => res.sendFile(path.join(__dirname, "public/views/index.html")));
  app.route("/").post(userController.getAllUsers);
  
  app.route("/adduser").get((req, res) => res.sendFile(path.join(__dirname, "public/views/addUser.html")));
  app.route("/adduser").post(userController.createUser);

  app.route("/deleteUser/:id").get(userController.deleteUser);

  app.route("/updateUser/:id").get(userController.updateUserPage);
  app.route("/updateUser").get(userController.updateUserFormData);
  app.route("/updateUser").post(userController.updateUserFormSubmit);

  app.route("/login").get((req, res) => res.send("Login Page"));
};
