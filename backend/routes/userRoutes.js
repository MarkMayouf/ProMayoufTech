import express from "express";
 const router =express.Router()
 import { authUser,getUserProfile,registerUser,updateProfile } from "../controllers/userController.js"
 import { protect } from "../middleware/authMiddleware.js";

 


router.post("/login",authUser)
router.route("/profile").get(protect,getUserProfile).put(protect,updateProfile)
router.route("/").post(registerUser)


export default router 