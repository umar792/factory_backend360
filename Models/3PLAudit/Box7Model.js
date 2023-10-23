const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box7Schema = new Schema({
  Answer1: {
    suffecientventilation: {
      type: String,
      required: [
        true,
        "Please Enter Is there suffecient ventilation in the warehouse",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer2: {
    inchesofspacebetween: {
      type: String,
      required: [
        true,
        "Please Enter Is there 12 inches of space between pallet rows",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer3: {
    adequatelighting: {
      type: String,
      required: [
        true,
        "Please Enter Is there adequate lighting throughout the warehoused",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer4: {
    temperatureandhumidity: {
      type: String,
      required: [
        true,
        "Please Enter Is the temperature and humidity within acceptable limits",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer5: {
    buildingclean: {
      type: String,
      required: [true, "Please Enter Is the building clean, dry and odourless"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer6: {
    moldmonitoringtraining: {
      type: String,
      required: [
        true,
        "Please Enter Is the mold monitoring training completed by all team members",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer7: {
    moldlogupdated: {
      type: String,
      required: [
        true,
        "Please Enter PIs the mold log updated and does the data look accurate",
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
});
const Box7Model = mongoose.model("box7", Box7Schema);
module.exports = Box7Model;
