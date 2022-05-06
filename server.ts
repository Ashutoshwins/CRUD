import express  from "express";
import mongoose from "mongoose";
import {router} from "./route/routes";

const app = express();

const connects =mongoose.connect('mongodb://localhost:27017/NewData');
app.use(express.json());
app.use(router);

app.listen(8000,function(){

    console.log("start")
})













export default connects;

 
