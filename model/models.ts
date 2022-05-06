import {required,string} from 'joi'
import mongoose, {model} from 'mongoose';
import IUser from "../interface/user"

const Schema = mongoose.Schema

const userSchema  = new Schema<IUser>({
    name:{
        type:String,
        // required: true,
    },
    tech:{
        type:String,
        

    }

    // email:{
    //     type:String,
    //     trim: true,
    //     lowercase: true,
    // }





});


export const newModel=model('models',userSchema);
// export default newModel