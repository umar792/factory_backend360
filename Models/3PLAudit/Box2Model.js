const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box2Schema = new Schema({
  Answer1: {
    buildingshared: {
      type: String,
      required: [
        true,
        "Please Enter Is This building shared with other customers",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer2: {
    registrationofthisbuilding: {
      type: String,
      required: [
        true,
        "Please Enter Is the FDA registration of this building up to date",
      ],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer3: {
    certificateofinsurance: {
      type: String,
      required: [true, "Please Enter Is the certificate of insurance current"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer4: {
    Statepermitcurrent: {
      type: String,
      required: [true, "Please Enter Is the State permit current"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer5: {
    thirdpartaudit: {
      type: String,
      required: [true, "Please Enter Is the third part audit current"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer6: {
    Emergencycontact: {
      type: String,
      required: [true, "Please Enter Is the Emergency contact updated"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer7: {
    orgchart: {
      type: String,
      required: [true, "Please Enter Is the org chart current"],
    },
    comment: String,
    image: {
      public_id: String,
      url: String,
    },
  },
  Answer8: {
    criticalmanagementroles: {
      type: String,
      required: [true, "Please Enter Are all critical management roles filled"],
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

const Box2Model = mongoose.model("box2", Box2Schema);
module.exports = Box2Model;
