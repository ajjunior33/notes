const { isUuid } = require("uuidv4");
const { isAfter } = require("date-fns");
const Access = require("../models/Access");

module.exports = async (request, response, next) => {
  try {
    const { token } = request.headers;

    if (!token) {
      throw new Error("What is token ?");
    }

    if (!isUuid(token)) {
      throw new Error("Token Invalid ");
    }

    const checkToken = await Access.findOne({ token_access: token });


    if (!checkToken) {
      throw new Error("Não encontrei esse token de validação. ");
    }
    const validate = checkToken.validateDate;

    const now = new Date();

    if (isAfter(now, validate)) {
      throw new Error("Token expirado.");
    }

    request.username = checkToken.username;

    return next();
  } catch (error) {
    return response.status(500).json({ status: false, message: error.message });
  }
};
