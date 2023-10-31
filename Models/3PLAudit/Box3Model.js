const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box3Schema = new Schema(
  {
    Answer1: {
      workersappeartobehappy: {
        type: String,
        required: [true, "Please Enter Do workers appear to be happy"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer2: {
      inboundoutboundloads: {
        type: String,
        required: [
          true,
          "Please Enter Is the facility staffed in line with expected inbound/outbound loads",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer3: {
      trainingprograms: {
        type: String,
        required: [
          true,
          "Please Enter Does the facility have documented training programs    ",
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

const Box3Model = mongoose.model("box3", Box3Schema);
module.exports = Box3Model;
