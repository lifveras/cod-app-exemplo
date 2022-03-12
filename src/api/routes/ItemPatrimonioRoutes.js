// const routes = require("express").Router();
const {Router} = require("express");

const ItemPatrimonioController = require("../controllers/ItemPatrimonioController")

const routes = Router();

//GET localhost:3333/itempatri/all
routes.get("/all", ItemPatrimonioController.listAll);
routes.get("/:patrimonio/:servidor", ItemPatrimonioController.get);
//POST localhost:3333/itempatri/add
routes.post("/add", ItemPatrimonioController.add);

module.exports = routes;