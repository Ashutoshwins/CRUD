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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const joi_1 = __importDefault(require("joi"));
const storage_1 = __importDefault(require("../storage/storage"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// import { STATUS_CODES } from 'http';
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const response_1 = __importDefault(require("../utils/response"));
const status_code_1 = __importDefault(require("../utils/status_code"));
// import  UserStore from '../storage/storage';
// const store = new UserStore()
//PostStudentDetails...
let newStudent = function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = joi_1.default.object({
            name: joi_1.default.string().required(),
            age: joi_1.default.number().required(),
            tech: joi_1.default.string().required(),
            email: joi_1.default.string().required(),
            password: joi_1.default.string().required(),
        });
        const parmas = schema.validate(req.body, { abortEarly: false });
        if (parmas.error) {
            res.status(403).send(parmas.error);
            return;
        }
        let userInput = req.body;
        userInput.password = yield bcrypt_1.default.hash(userInput.password, 10);
        const student = new storage_1.default({
            name: userInput.name,
            age: userInput.age,
            tech: userInput.tech,
            email: userInput.email,
            password: userInput.password,
        });
        student.save();
        res.status(200).send({ messege: "user created", id: student._id });
    });
};
//GetByName...
let StudentByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield storage_1.default.findOne({ name: req.params.name });
        if (!req.params.name) {
            return res.send();
        }
        // student.save()
        res.status(200).send({ data: student });
    }
    catch (e) {
        res.status(404).send(e);
    }
});
//GetAllStudentDetails...
let allStudentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield storage_1.default.find({});
    // console.log(students)
    res.status(200).send({ Data: students });
});
//GetStudentDetailsById...
let StudentDetailsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentsById = yield storage_1.default.findById(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(studentsById);
    }
    catch (e) {
        res.status(404).send(e);
    }
});
//deleteStudentDetails...
let deleteStudentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteStudent = yield storage_1.default.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(deleteStudent);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
//updateStudentDetails...
let updateStudentDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const UpdateStudent = yield storage_1.default.findByIdAndUpdate(req.params.id, req.body);
        res.send(UpdateStudent);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
let loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const studentlogin = yield storage_1.default.findOne({ email: email });
        // res.send(studentlogin)
        const comparePassword = yield bcrypt_1.default.compare(password, studentlogin.password);
        if (comparePassword === true) {
            const token = jsonwebtoken_1.default.sign({ _id: "6278e7be7dc36e5be56dcffd" }, "qwertyuioplkjhgfdaszxcvghbnjhyui");
            return (0, response_1.default)(res, { msg: "login succes", token: token }, status_code_1.default.OK);
        }
        else {
            return (0, response_1.default)(res, { msg: "invalid Credentials", }, status_code_1.default.UN_AUTHORIZED);
        }
    }
    catch (e) {
        return (0, response_1.default)(res, { msg: "User not found", }, status_code_1.default.NOT_FOUND);
        res.status(400).send(e);
    }
});
exports.UserController = {
    newStudent,
    StudentByName,
    allStudentDetails,
    StudentDetailsById,
    deleteStudentDetails,
    updateStudentDetails,
    loginUser,
};
function async(password) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtDO0FBRWxDLGlFQUF1QztBQUN2QyxvREFBNEI7QUFDNUIsdUNBQXVDO0FBQ3ZDLGdFQUE4QjtBQUM5QixpRUFBNEM7QUFDNUMsdUVBQStDO0FBRy9DLCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFHaEMsdUJBQXVCO0FBRXZCLElBQUksVUFBVSxHQUFHLFVBQWdCLEdBQVksRUFBRSxHQUFhOztRQUV4RCxNQUFNLE1BQU0sR0FBRyxhQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3RCLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzdCLEdBQUcsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzVCLElBQUksRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzdCLEtBQUssRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQzlCLFFBQVEsRUFBRSxhQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFO1NBQ3BDLENBQUMsQ0FBQztRQUVILE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNsQyxPQUFNO1NBQ1Q7UUFDRCxJQUFJLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxRQUFRLEdBQUcsTUFBTSxnQkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELE1BQU0sT0FBTyxHQUFHLElBQUksaUJBQUssQ0FBQztZQUN0QixJQUFJLEVBQUUsU0FBUyxDQUFDLElBQUk7WUFDcEIsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHO1lBQ2xCLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtZQUNwQixLQUFLLEVBQUUsU0FBUyxDQUFDLEtBQUs7WUFDdEIsUUFBUSxFQUFFLFNBQVMsQ0FBQyxRQUFRO1NBRS9CLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUFBLENBQUE7QUFFRCxjQUFjO0FBRWQsSUFBSSxhQUFhLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDdEQsSUFBSTtRQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0saUJBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQzlELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNsQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUVwQjtRQUNELGlCQUFpQjtRQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQzNDO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtLQUUxQjtBQUVMLENBQUMsQ0FBQSxDQUFBO0FBRUQseUJBQXlCO0FBRXpCLElBQUksaUJBQWlCLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUNyQyx3QkFBd0I7SUFDeEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQTtBQUVELDBCQUEwQjtBQUUxQixJQUFJLGtCQUFrQixHQUFHLENBQU8sR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBQzNELElBQUk7UUFDQSxNQUFNLFlBQVksR0FBRyxNQUFNLGlCQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQztRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FHMUI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzFCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFFRCx5QkFBeUI7QUFFekIsSUFBSSxvQkFBb0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM3RCxJQUFJO1FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNqQztRQUNELEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDM0I7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNSLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNCO0FBRUwsQ0FBQyxDQUFBLENBQUE7QUFFRCx5QkFBeUI7QUFHekIsSUFBSSxvQkFBb0IsR0FBRyxDQUFPLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUM3RCxJQUFJO1FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxpQkFBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU1RSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzNCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtBQUVMLENBQUMsQ0FBQSxDQUFBO0FBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBTyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDbEQsSUFBSTtRQUNBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRW5DLE1BQU0sWUFBWSxHQUFNLE1BQU0saUJBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQTtRQUM1RCx5QkFBeUI7UUFDekIsTUFBTSxlQUFlLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzVFLElBQUksZUFBZSxLQUFLLElBQUksRUFBRTtZQUMxQixNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBQywwQkFBMEIsRUFBRSxFQUFDLGtDQUFrQyxDQUFDLENBQUE7WUFFNUYsT0FBTyxJQUFBLGtCQUFZLEVBQUMsR0FBRyxFQUFDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEVBQUMscUJBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUk1RTthQUNJO1lBQ0QsT0FBTyxJQUFBLGtCQUFZLEVBQUMsR0FBRyxFQUFDLEVBQUMsR0FBRyxFQUFDLHFCQUFxQixHQUFFLEVBQUMscUJBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUVuRjtLQUNKO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDUixPQUFPLElBQUEsa0JBQVksRUFBQyxHQUFHLEVBQUMsRUFBQyxHQUFHLEVBQUMsZ0JBQWdCLEdBQUUsRUFBQyxxQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRXZFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQzFCO0FBQ0wsQ0FBQyxDQUFBLENBQUE7QUFHWSxRQUFBLGNBQWMsR0FBRztJQUMxQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixTQUFTO0NBR1osQ0FBQTtBQUNELFNBQVMsS0FBSyxDQUFDLFFBQWE7SUFDeEIsTUFBTSxJQUFJLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ2pELENBQUMifQ==