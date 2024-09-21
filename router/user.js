import { Router } from "express";
import { getUsers } from "../controller/user.js";

const router = Router();

router.use((req, res, next) => {
    console.log('User middleware');
    next();
})

router.get('/', getUsers)

export default router