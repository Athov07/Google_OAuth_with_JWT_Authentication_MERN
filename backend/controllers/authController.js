import User from "../models/User.js";
import { generateTokens } from "../utils/generateTokens.js";

export const googleCallback = async (req, res) => {
  const { accessToken, refreshToken } = generateTokens(req.user);

  await User.findByIdAndUpdate(req.user._id, { refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax", 
    path: "/", 
  });

  res.redirect(
    `${process.env.FRONTEND_URL}/login-success?token=${accessToken}`
  );
};



// logout
export const logout = async (req, res) => {
  try {

    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(204).json({ message: "No refresh token found" });
    }

    const user = await User.findOne({ refreshToken });

    if (user) {
      user.refreshToken = null;
      await user.save();
    }

    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: false,
    });

    res.json({ message: "Logged out successfully" });

  } catch (error) {
    console.log("Logout error:", error);
    res.status(500).json({ message: "Logout failed" });
  }
};
