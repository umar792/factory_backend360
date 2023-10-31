const Box2Model = require("../../Models/QAAduit/Box2Model");
const UserModel = require("../../Models/UserModel");

module.exports = {
  CreateBox1Answer: async (req, res) => {
    try {
      const { Answer1, Answer2, Answer3 } = req.body;
      const answers = [req.body.Asnwer1, req.body.Asnwer2, req.body.Asnwer3];
      // Use a for loop to process each answer object
      for (let i = 0; i < answers.length; i++) {
        // Check if the answer object has 'img' property
        if (answers[i] && answers[i].img) {
          answers[i].image = await uploadToCloudinary(answers[i].img);
        }
      }

      await Box2Model.create({
        Answer1,
        Answer2,
        Answer3,
        user: req.user._id,
        owner: req.user.user,
      });

      res.status(200).json({
        success: true,
        message: "Data submit successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ========== org
  CreateBox1AnswerORG: async (req, res) => {
    try {
      const { Answer1, Answer2, Answer3 } = req.body;
      const answers = [req.body.Asnwer1, req.body.Asnwer2, req.body.Asnwer3];
      // Use a for loop to process each answer object
      for (let i = 0; i < answers.length; i++) {
        // Check if the answer object has 'img' property
        if (answers[i] && answers[i].img) {
          answers[i].image = await uploadToCloudinary(answers[i].img);
        }
      }

      await Box2Model.create({
        Answer1,
        Answer2,
        Answer3,
        user: req.org._id,
        owner: req.org._id,
      });

      res.status(200).json({
        success: true,
        message: "Data submit successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //   =========== git all answer of box1
  box2Answer: async (req, res) => {
    try {
      if (req.user.role === "superAdmin") {
        const box1Answer = await Box2Model.find();
        res.status(200).json({
          success: true,
          box1Answer,
        });
      } else {
        const box1Answer = await Box2Model.find({
          $or: [
            { user: req.user._id },
            { schedulerUser: req.user._id.toString() },
          ],
        }).populate("user");
        res.status(200).json({
          success: true,
          box1Answer,
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  box2AnswerORG: async (req, res) => {
    try {
      const box1Answer = await Box2Model.find({
        $or: [
          { owner: req.org._id },
          { schedulerUser: req.org._id.toString() },
        ],
      });
      res.status(200).json({
        success: true,
        box1Answer,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ============ get login user form
  loginuserFromData: async (req, res) => {
    try {
      const user = await UserModel.findById(req.user._id);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Plaese Login",
        });
      }

      const Data = await Box2Model.find({
        $or: [
          { user: req.user._id },
          { schedulerUser: req.user._id.toString() },
        ],
      }).populate("user");
      res.status(200).json({
        success: true,
        Data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
};
