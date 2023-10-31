const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box8Schema = new Schema(
  {
    Answer1: {
      properfencingaroundtheyard: {
        type: String,
        required: [
          true,
          "Please Enter Is there proper fencing around the yard with gates that can be lockede",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer2: {
      mandoorsinthewarehouse: {
        type: String,
        required: [
          true,
          "Please Enter Are all man doors in the warehouse locked",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },

    Answer3: {
      yardfreeofdebris: {
        type: String,
        required: [
          true,
          "Please Enter Is the yard free of debris with no waterlogging, cracks or excessive wear",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },

    Answer4: {
      Dockloadlevelers: {
        type: String,
        required: [true, "Please Enter Dock load levelers"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },

    Answer5: {
      PLprovided: {
        type: String,
        required: [true, "Please Enter Has the 3PL provided acknowledgeds"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer6: {
      detailededtrailer: {
        type: String,
        required: [
          true,
          "Please Enter Is the detaileded trailer information provided every hour via google docs",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer7: {
      trailerinformationincludetrailrnumber: {
        type: String,
        required: [
          true,
          "Please Enter Does the trailer information include trailr number, trailer owner, load status etc",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },

    Answer8: {
      proofofdistributingapplicable: {
        type: String,
        required: [
          true,
          "Please Enter Is there proof of distributing applicable paperwork",
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
const Box8Model = mongoose.model("box8", Box8Schema);
module.exports = Box8Model;
