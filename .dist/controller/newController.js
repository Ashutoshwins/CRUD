"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
const models_1 = require("../model/models");
// const allUser = newModel
let userDetails = function (req, res) {
    const user = new models_1.newModel(req.body);
    user.save();
    res.status(200).send(user);
};
let newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield models_1.newModel.find();
    res.status(200).send({ Data: user });
});
let deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteData = yield models_1.newModel.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(deleteData);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// //get by id
let getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userById = yield models_1.newModel.findById(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(userById);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
// //get by id
let getByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userByName = yield models_1.newModel.findOne({ name: req.params.name });
        if (!req.params.name) {
            return res.status(404).send();
        }
        res.send(userByName);
    }
    catch (error) {
        res.status(500).send(error);
    }
});
exports.controller = {
    userDetails,
    newUser,
    deleteUser,
    getById,
    getByName,
};
