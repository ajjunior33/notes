const { Router } = require("express");

const notesRouter = Router();

const NotesController = require("../controllers/NotesController");
const Auth = require("../middleware/Auth");
notesRouter
  .get("/", Auth, NotesController.list)
  .get("/:id_note", Auth, NotesController.show)
  .post("/", Auth, NotesController.store)
  .delete("/:id", Auth, NotesController.destroy)
  .put("/:id_note", Auth, NotesController.update);

module.exports = notesRouter;
