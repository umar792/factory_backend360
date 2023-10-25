const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box6Schema = new Schema(
  {
    Answer1: {
      documentedpickingandloading: {
        type: String,
        required: [
          true,
          "Please Enter Is there a documented picking and loading process",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer2: {
      Documenttheloadingprocess: {
        type: String,
        required: [true, "Please Enter Document the loading process"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer3: {
      loadingtimesrecorded: {
        type: String,
        required: [true, "Please Enter Are the loading times recorded"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer4: {
      averageloadtime: {
        type: String,
        required: [true, "Please Enter average load time"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer5: {
      documentedhandlelateloads: {
        type: String,
        required: [
          true,
          "Please Enter Is there a documented process to handle late loads and work ins",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer6: {
      YTDOD: {
        type: String,
        required: [true, "Please Enter What is the YTD OD%"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer7: {
      ODunder90: {
        type: String,
        required: [
          true,
          "Please Enter Please provide top three reasons if OD% is under 90%",
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
  },
  { timestamps: true }
);
const Box6Model = mongoose.model("box6", Box6Schema);
module.exports = Box6Model;
