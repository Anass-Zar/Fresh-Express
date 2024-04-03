import express from "express";
import { login , logout } from "../controllers/admin_controller.js";

const router = express.Router();

router.post("/login" , login)
router.get("/logout" , logout)

export default router;
