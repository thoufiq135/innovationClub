const express = require("express");
const route = express.Router();
const {InnovationClub,connectdb}=require("./connectDB")

route.get("/innovationClub", async (req, res) => {
  try {
    const { fromDate, toDate } = req.query;

    let query = {};

    if (fromDate && toDate) {
      query.createdAt = {
        $gte: new Date(fromDate),
        $lte: new Date(toDate),
      };
    }

    const data = await InnovationClub.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      count: data.length,
      data,
    });
  } catch (e) {
    console.log("Error fetching data:", e);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
module.exports=route