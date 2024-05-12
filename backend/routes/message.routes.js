import express from "express";
import { getMessages, sendMessage } from "../controller/message.controller";
import protectRoute from "../middleware/protectRoute";

const router = express.Router();

router.post("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
