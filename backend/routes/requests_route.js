import express from "express";
import { requests , request, addRequest } from "../controllers/requests_controller.js";

const router = express.Router();

router.get("/requests" , requests)
router.post("/add_requests" , addRequest)
router.get("/request/:id" , request)

export default router;
