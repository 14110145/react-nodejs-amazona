import express from "express";
import userModel from "../models/userModel";

const router = express.Router();

router.get("/createadmin", async (req, res) => {
  try {
    const user = new userModel({
      name: "Phu",
      email: "phult@gmail.com",
      password: "123456",
      isAdmin: true,
    });

    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ msg: error.message });
  }
});

export default router;