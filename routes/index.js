import express from "express";
import { getSentMessages } from "../controllers/GetSentMessages.js";
import { SendMessage } from "../controllers/SendMessage.js";

const router = express.Router();

router.post("/sendMessage", SendMessage);
router.get("/getSentMessages", getSentMessages);

export default router;
