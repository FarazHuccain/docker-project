import { Router } from "express";
import { createUser, getUsers } from "../controller/user.js";

const router = Router();

router.post("/createUser", createUser);
router.get("/", getUsers);
export default router;
