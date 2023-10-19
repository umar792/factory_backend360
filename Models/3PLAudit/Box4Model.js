const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box4Schema = new Schema({
  Answer1: {
    documentedsafety: {
      type: String,
      required: [true, "Please Enter Is there a documented safety plan"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer2: {
    emergencycontactnumbers: {
      type: String,
      required: [true, "Please Enter Are all emergency contact numbers"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer3: {
    documentedsafetymeeting: {
      type: String,
      required: [
        true,
        "Please Enter Is there a documented safety meeting minutes",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer4: {
    objectivesafetymetric: {
      type: String,
      required: [
        true,
        "Please Enter Does the facility have an objective safety metric ( OIR)",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },

  Answer5: {
    safetincidentstracked: {
      type: String,
      required: [true, "Please Enter Are the safet incidents tracked"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer6: {
    emergencyexitsclear: {
      type: String,
      required: [true, "Please Enter Are all emergency exits clear"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer7: {
    extinguishers: {
      type: String,
      required: [true, "Please Enter Are all fire extinguishers"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer8: {
    emergencyevacuationplan: {
      type: String,
      required: [true, "Please Enter emergency evacuation plan"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer9: {
    amplelighting: {
      type: String,
      required: [true, "Please Enter ample lighting"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer10: {
    anyleaningpallets: {
      type: String,
      required: [true, "Please Enter any leaning pallets"],
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
    ref: "user",
  },
});
const Box4Model = mongoose.model("box4", Box4Schema);
module.exports = Box4Model;
