const express = require("express");
const dotenv = require("dotenv");
let sequelize = require("./config/config.json");
const blocksRoutes = require("./routes/blocksRoutes");

require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/api", blocksRoutes);
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server esta corriendo en el puerto: ${PORT}`);
});
