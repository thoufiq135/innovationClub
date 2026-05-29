const mongoose = require("mongoose");
require("dotenv").config();

const innovationClubSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    ParentName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile_no: {
      type: String,
      required: true,
      trim: true,
    },
    School: {
      type: String,
      required: true,
      trim: true,
    },
    Class: {
      type: String,
      required: true,
      trim: true,
    },
    des: {
      type: String,
      required: true,
      trim: true,
    },
    q_A: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const InnovationClub = mongoose.model(
  "InnovationClub",
  innovationClubSchema
);

async function connectdb() {
  try {
    await mongoose.connect(process.env.mongoURI);
    console.log("Connected to DB");
    return true;
  } catch (e) {
    console.error("DB Connection Error:", e);
    return false;
  }
}

module.exports = { InnovationClub, connectdb };