const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box9Schema = new Schema(
  {
    Answer1: {
      userobservations: {
        type: String,
        required: [
          true,
          "Please Enter This section is open and users can write down their own observations",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "organization",
    },
    schedulerUser: {
      type: String,
    },
  },
  { timestamps: true }
);
const Box9Model = mongoose.model("box9", Box9Schema);
module.exports = Box9Model;
