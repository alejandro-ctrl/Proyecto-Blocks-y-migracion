const { Blocks } = require("../models");
let ListarBlocksService = async () => {
  try {
    let resp = await Blocks.findAll();
    return resp;
  } catch (e) {
    console.log(e);
  }
};
module.exports = { ListarBlocksService };
