const { ListarBlocksService } = require("../service/blocksService");

let listarBlocks = async (req, res) => {
  try {
    let respuesta = await ListarBlocksService();
    res.json(respuesta);
  } catch (e) {
    console.log(e);
  }
};
module.exports = { listarBlocks };
