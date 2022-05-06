import express from "express";
export const router = express.Router()

import {controller} from "../controller/newController"

router.post('/create',controller.userDetails);

router.get('/user',controller.newUser);
router.get("/user/:id",controller.getById)

router.delete('/delete/:id',controller.deleteUser);

router.get('/getUser/:name',controller.getByName);






// module.exports = router







