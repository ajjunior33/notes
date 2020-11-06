const { Router } = require("express");

const UsersRoutes = require("./users.routes");
const NotesRoutes = require("./notes.routes");
const routes = Router();

routes.use("/users", UsersRoutes);
routes.use("/notes", NotesRoutes);

module.exports = routes;
