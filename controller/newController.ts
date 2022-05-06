import { Request,Response} from "express";
import {newModel} from '../model/models';
// const allUser = newModel

let userDetails = function(req:Request,res:Response){
    const user = new newModel(req.body);
    user.save()
    res.status(200).send(user);

}

let newUser = async (req:Request, res:Response) => {
    const user = await newModel.find()
    res.status(200).send({ Data: user });
}

let deleteUser = async(req:Request, res:Response) =>{
    try {
 
        const deleteData = await newModel.findByIdAndDelete(req.params.id) 
        if(!req.params.id){
            return res.status(404).send();

        }
        res.send(deleteData);
    } catch (error) {
        res.status(500).send(error)
    }
}

// //get by id
let getById= async (req:Request, res:Response)=>{
    try{
    const userById= await newModel.findById(req.params.id)
        if(!req.params.id){
            return res.status(404).send();
        }
        res.send(userById);
} catch(error){
    res.status(500).send(error)
}
}
// //get by id
let getByName= async (req:Request, res:Response)=>{
    try{
    const userByName= await newModel.findOne({name:req.params.name})
        if(!req.params.name){
            return res.status(404).send();
        }
        res.send(userByName);
} catch(error){
    res.status(500).send(error)
}
    
}
    





export const controller={
    userDetails,
    newUser,
    deleteUser,
    getById,
    getByName,
}
