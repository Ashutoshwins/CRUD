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
            res.status(201).send({ msg: "login  sucessfull" });
            // console.log(res.status(201).send("comparePassword"))
        }
        else {
            res.send("password is in correct");
        }
    }
    catch (e) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbnRyb2xsZXJzL2NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQWtDO0FBRWxDLGlFQUF1QztBQUN2QyxvREFBNEI7QUFHNUIsK0NBQStDO0FBQy9DLGdDQUFnQztBQUdoQyx1QkFBdUI7QUFFdkIsSUFBSSxVQUFVLEdBQUcsVUFBZ0IsR0FBWSxFQUFFLEdBQWE7O1FBRXhELE1BQU0sTUFBTSxHQUFHLGFBQUcsQ0FBQyxNQUFNLENBQUM7WUFDdEIsSUFBSSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsUUFBUSxFQUFFLGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUU7U0FDcEMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xDLE9BQU07U0FDVDtRQUNELElBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsU0FBUyxDQUFDLFFBQVEsR0FBRyxNQUFNLGdCQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUs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