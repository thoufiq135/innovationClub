const express = require("express");
const route = express.Router();
const {InnovationClub,connectdb}=require("./connectDB")

route.post("/innovationClub", async (req, res) => {
  try {
    const { Name, ParentName, mobile_no, School, Class, des, q_A } = req.body || {};

    if (!Name || !ParentName || !mobile_no || !School || !Class || !des || !q_A) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newForm = await InnovationClub.create({
      Name,
      ParentName,
      mobile_no,
      School,
      Class,
      des,
      q_A,
    });

    return res.status(201).json({
      message: "Form submitted successfully",
      data: newForm,
    });
  } catch (e) {
    console.log("error at form filling", e);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = route;