"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./route/routes");
const app = (0, express_1.default)();
const connects = mongoose_1.default.connect('mongodb://localhost:27017/NewData');
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(8000, function () {
    console.log("start");
});
exports.default = connects;
