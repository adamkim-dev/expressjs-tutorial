import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controller/usersController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);

export default router;
