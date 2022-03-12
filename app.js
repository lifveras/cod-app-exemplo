const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const ItemPatrimonioRoutes = require("./src/api/routes/ItemPatrimonioRoutes");
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use("/itempatri", ItemPatrimonioRoutes);

module.exports = app;