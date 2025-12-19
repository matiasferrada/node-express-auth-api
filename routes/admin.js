import express from "express";
import { verifyToken, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/secret", verifyToken, isAdmin, (req, res) => {
  res.json({
    message: "Welcome admin 👑",
    user: req.user
  });
});

export default router;
