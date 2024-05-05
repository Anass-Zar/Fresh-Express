import express from "express";
import { requests , request, addRequest, updateRequestStatus } from "../controllers/requests_controller.js";


const router = express.Router();

router.get("/requests" , requests)
router.post("/add_requests" , addRequest)
router.get("/request/:id" , request)
router.put("/requests/:id", updateRequestStatus);


export default router;
