import mongoose from "mongoose";
import IUSER from '../interfaces/user/IUSER';
export declare const schema: typeof mongoose.Schema;
declare const studentModel: mongoose.Model<IUSER, {}, {}, {}>;
export default studentModel;
