const { Router } = require("express");
const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

usersRoutes
  .post("/auth", UsersController.auth)
  .post("/register", UsersController.register);

module.exports = usersRoutes;
