"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
const newController_1 = require("../controller/newController");
exports.router.post('/create', newController_1.controller.userDetails);
exports.router.get('/user', newController_1.controller.newUser);
exports.router.get("/user/:id", newController_1.controller.getById);
exports.router.delete('/delete/:id', newController_1.controller.deleteUser);
exports.router.get('/getUser/:name', newController_1.controller.getByName);
// module.exports = router
