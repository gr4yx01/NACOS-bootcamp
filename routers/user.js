import { Router } from "express";
import { createUser, getUsers, updateUser } from "../controller/user.js";

const router = Router();


router.get('/users', getUsers)

router.post('/users', createUser);

router.patch('/users/:name', updateUser)

export default router;