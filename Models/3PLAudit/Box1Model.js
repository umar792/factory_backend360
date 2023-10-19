const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Box1Schema = new Schema(
  {
    Answer1: {
      FacilityName: {
        type: String,
        required: [true, "Please Enter Facility Name"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer2: {
      FacilityCode: {
        type: String,
        required: [true, "Please Enter Facility Code"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer3: {
      MotherPlant: {
        type: String,
        required: [true, "Please Enter Mother Plant"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer4: {
      Auditdate: {
        type: String,
        required: [true, "Please Enter Audit date"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer5: {
      AuditedBy: {
        type: String,
        required: [true, "Please Enter Audited By"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer6: {
      Inspectiontype: {
        type: String,
        required: [true, "Please Enter Inspection type"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer7: {
      Ageofbuilding: {
        type: String,
        required: [true, "Please Enter Age of building"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },

    Answer8: {
      Buildingsizeinsqft: {
        type: String,
        required: [true, "Please Enter Building size in sqft"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer9: {
      Numberofemployees: {
        type: String,
        required: [true, "Please Enter Number of employees"],
      },
      comment: {
        type: String,
      },
      image: {
        public_id: String,
        url: String,
      },
    },
    Answer10: {
      Operatinghours: {
        type: String,
        required: [true, "Please Enter Operating hours"],
      },
      comment: {
        type: String,
      },
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
  },
  { timestamps: true }
);
const Box1Model = mongoose.model("box1", Box1Schema);
module.exports = Box1Model;
