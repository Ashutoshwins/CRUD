"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const controller_1 = require("../controllers/controller");
const express_1 = __importDefault(require("express"));
exports.route = express_1.default.Router();
exports.route.post('/create', controller_1.UserController.newStudent);
exports.route.get('/getData', controller_1.UserController.allStudentDetails);
exports.route.get('/getName/:name', controller_1.UserController.StudentByName);
exports.route.get('/getDataBy/:id', controller_1.UserController.StudentDetailsById);
exports.route.delete('/delete/:id', controller_1.UserController.deleteStudentDetails);
exports.route.patch('/updateDetails/:id', controller_1.UserController.updateStudentDetails);
exports.route.post('/login', controller_1.UserController.loginUser);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsMERBQXVEO0FBQ3ZELHNEQUE4QjtBQUNqQixRQUFBLEtBQUssR0FBRyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBR3RDLGFBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDLDJCQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsYUFBSyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUMsMkJBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3ZELGFBQUssQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsMkJBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN6RCxhQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLDJCQUFjLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUM5RCxhQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBQywyQkFBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDaEUsYUFBSyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBQywyQkFBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEUsYUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUMsMkJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyJ9