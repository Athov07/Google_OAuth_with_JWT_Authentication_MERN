import express from "express";
import passport from "passport";
import { generateTokens } from "../utils/generateTokens.js";
import User from "../models/User.js";
import { logout } from "../controllers/authController.js";

const router = express.Router();

// Step 1: Start Google OAuth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"], session: false })
);

// Step 2: Google OAuth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  async (req, res) => {
    try {
      const user = req.user;

      const { accessToken, refreshToken } = generateTokens(user);

      await User.findByIdAndUpdate(user._id, { refreshToken });

      // SET COOKIE HERE
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
      });

      // THEN REDIRECT
      res.redirect(
        `${process.env.FRONTEND_URL}/login-success?token=${accessToken}`
      );

    } catch (err) {
      console.error(err);
      res.redirect("/");
    }
  }
);



router.post("/logout", logout);


export default router;