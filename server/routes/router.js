const express = require("express");
const { homeRoutes } = require("../services/render");
const route = express.Router();

const services = require("../services/render");
const controller = require("../controller/controller.js");

/**
 * @description Root Route
 * @method GET /
 */
route.get("/", services.homeRoutes);

/**
 * @description Add User
 * @method GET /add-user
 */
route.get("/add-user", services.addUser);

/**
 * @description Update User
 * @method GET /update-user
 */
route.get("/update-user", services.updateUser);

// API Route
route.post("/api/user", controller.create);
route.get("/api/user", controller.find);
route.put("/api/user/:id", controller.update);
route.delete("/api/user/:id", controller.delete);

module.exports = route;
