const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box5Schema = new Schema(
  {
    Answer1: {
      FGpallets: {
        type: String,
        required: [true, "Please Enter Are there any FG pallets"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer2: {
      FGholdarea: {
        type: String,
        required: [true, "Please Enter Is the FG hold area "],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer3: {
      pallets: {
        type: String,
        required: [
          true,
          "Please Enter Are all pallets in the hold tagged and marked",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer4: {
      documentedevidence: {
        type: String,
        required: [true, "Please Enter documented evidence "],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer5: {
      standingwate: {
        type: String,
        required: [
          true,
          "Please Enter Is there any standing water in the facility",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer6: {
      ventilation: {
        type: String,
        required: [
          true,
          "Please Enter Is there enough ventilation in the building",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer7: {
      systeminventorymatch: {
        type: String,
        required: [
          true,
          "Please Enter Does the system inventory match with physical inventory",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer8: {
      documentedandupdatedQA: {
        type: String,
        required: [
          true,
          "Please Enter Is there a documented and updated QA humidity log",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer9: {
      QAhumiditylog: {
        type: String,
        required: [
          true,
          "Please Enter Does the data in the QA humidity log in line with the local area/weather",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer10: {
      systeminventorytallied: {
        type: String,
        required: [true, "Please Enter system inventory tallied"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer11: {
      inventoryaccuracyscorerecorded: {
        type: String,
        required: [
          true,
          "Please Enter Is the inventory accuracy score recorded",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer12: {
      inventoryaccuracypast3months: {
        type: String,
        required: [
          true,
          "Please Enter What is the average inventory accuracy for the past 3 months    ",
        ],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer13: {
      palletLPN: {
        type: String,
        required: [true, "Please Enter pallet LPN"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer14: {
      FEFOFIFOobjectiv: {
        type: String,
        required: [true, "Please Enter FEFO/FIFO - is there an objectiv"],
      },
      comment: String,
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer15: {
      FEFOFIFOverified: {
        type: String,
        required: [true, "Please Enter Can FEFO/FIFO be verified"],
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
const Box5Model = mongoose.model("box5", Box5Schema);
module.exports = Box5Model;
