const Notes = require("../models/Notes");
const { uuid } = require("uuidv4");
module.exports = {
  async show(request, response){
    try{
      //TODO
      const { id_note } = request.params;
      const getNote = await Notes.findOne({_id: id_note});
      return response.status(200).json({
        status: true,
        data: getNote
      });   
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  },
  async list(request, response) {
    try {
      //TODO

      const username = request.username;
      const listen = await Notes.find({ username });

      const { converter } = request.query;
      if (converter === true) {
        const list = [];

        listen.map((note) => {
          const conversion = {
            id: note.id,
            title: note.title,
            message: marked(note.message),
          };
          list.push(conversion);
        });
        return response.json(listen);
      } else {
        return response.json(listen);
      }
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  },
  async store(request, response) {
    try {
      //TODO
      const { title, message } = request.body;
      const datePost = new Date();
      const post = {
        date: datePost,
        name: title,
        message,
        username: request.username,
      };

      await Notes.create(post);

      return response.status(200).json(post);
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message, status: false });
    }
  },
  async destroy(request, response) {
    try {
      const { id } = request.params;

      const note = await Notes.findOne({ _id: id });

      if (!note) {
        throw new Error("Is not existents note.");
      }
      await Notes.deleteOne({ _id: id });

      return response
        .status(200)
        .json({ message: "Deletado com sucesso", status: true });
    } catch (error) {
      return response
        .status(400)
        .json({ message: error.message, status: false });
    }
  },
    async update(request, response){
    try{
      //TODO
      const { id_note } = request.params;
      const { title, message } = request.body;


      const datePost = new Date();
      const post = {
        date: datePost,
        name: title,
        message,
        username: request.username,
      };

      const getNote = await Notes.updateOne({_id: id_note}, post);
      return response.status(200).json({
        status: true,
        message:"Update efetuado com sucesso."
      });   
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  },
};
