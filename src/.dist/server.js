"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const mongoose = require('mongoose');
const route_1 = require("./src/routes/route");
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const connection = mongoose_1.default.connect('mongodb://localhost:27017/Crud');
app.use(express_1.default.json());
app.use(route_1.route);
app.listen(3001, function () {
    console.log('server run..');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQThCO0FBQzlCLHdDQUF3QztBQUN4Qyw4Q0FBd0M7QUFDeEMsd0RBQWdDO0FBR2hDLE1BQU0sR0FBRyxHQUFHLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQ3RCLE1BQU0sVUFBVSxHQUFHLGtCQUFRLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLENBQUE7QUFJckUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxhQUFLLENBQUMsQ0FBQztBQUVmLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUVoQyxDQUFDLENBQUMsQ0FBQyJ9