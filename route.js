import express from "express";
import { getUsers, userLogin, userSignup } from "./controller.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/login", userLogin);
router.get("/signup", userSignup);

export default router;
