const { uuid, isUuid } = require("uuidv4");
const { parseISO, startOfHour, addHours } = require("date-fns");
const Access = require("../models/Access");
const Users = require("../models/Users");
module.exports = {
  async auth(request, response) {
    try {
      const { token } = request.headers;

      if (!token) {
        throw new Error("Você precisa informar o token no parametro Header.");
      }
      if (!isUuid(token)) {
        throw new Error("token is not valid");
      }

      if (!(await Users.findOne({ username: token }))) {
        throw new Error("Não econtrei esse usuario.");
      }

      const date = new Date();
      const validate = addHours(startOfHour(date), 3);
      const data = {
        token_access: uuid(),
        validateDate: validate,
        username: token,
      };

      await Access.create(data);

      return response.json({
        status: true,
        message: " Logado com sucesso, basta usar o código de acesso.",
        cod_access: data.token_access,
      });
    } catch (e) {
      return response.status(400).json({ status: false, message: e.message });
    }
  },
  async register(request, response) {
    try {
      const { name } = request.body;
      const user = { name, username: uuid() };

      const createUser = await Users.create(user);
      return response
        .status(200)
        .json({ status: true, user, message: "Usuario criado com sucesso." });
    } catch (e) {
      return response.status(400).json({ status: false, message: e.message });
    }
  },
};
