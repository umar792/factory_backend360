const express = require("express");
const router = express.Router();
const controller1 = require("../../Controller/QAAduit/Box1Controller");
const controller2 = require("../../Controller/QAAduit/Box2Controller");
const controller3 = require("../../Controller/QAAduit/Box3Controller");
const controller4 = require("../../Controller/QAAduit/Box4Controller");
const controller5 = require("../../Controller/QAAduit/Box5Controller");
const controller6 = require("../../Controller/QAAduit/Box6Controller");
const TokenVerfy = require("../../Middleware/TokenVerify");
const OrganizationTokenVerify = require("../../Middleware/OrganizationToken");

// -------------- box1
router.post("/qa/createbox1", TokenVerfy, controller1.CreateBox1Answer);
router.post(
  "/qa/createbox1org",
  OrganizationTokenVerify,
  controller1.CreateBox1AnswerORG
);
router.get("/qa/answerbox1", TokenVerfy, controller1.box1Answer);
router.get(
  "/qa/answerorgbox1",
  OrganizationTokenVerify,
  controller1.box1AnswerORG
);
router.get("/qa/user/box1/data", TokenVerfy, controller1.loginuserFromData);

// ------------- box2
router.post("/qa/createbox2", TokenVerfy, controller2.CreateBox1Answer);
router.post(
  "/qa/createbox2org",
  OrganizationTokenVerify,
  controller2.CreateBox1AnswerORG
);

router.get("/qa/answerbox2", TokenVerfy, controller2.box2Answer);
router.get(
  "/qa/answerorgbox2",
  OrganizationTokenVerify,
  controller2.box2AnswerORG
);
router.get("/qa/user/box2/data", TokenVerfy, controller2.loginuserFromData);

// ------------- box3
router.post("/qa/createbox3", TokenVerfy, controller3.CreateBox1Answer);
router.post(
  "/qa/createbox3org",
  OrganizationTokenVerify,
  controller3.CreateBox1AnswerORG
);
router.get("/qa/answerbox3", TokenVerfy, controller3.box3Answer);
router.get(
  "/qa/answerorgbox3",
  OrganizationTokenVerify,
  controller3.box3AnswerORG
);
router.get("/qa/user/box3/data", TokenVerfy, controller3.loginuserFromData);

// ------------- box4
router.post("/qa/createbox4", TokenVerfy, controller4.CreateBox1Answer);
router.post(
  "/qa/createbox4org",
  OrganizationTokenVerify,
  controller4.CreateBox1AnswerORG
);

router.get("/qa/answerbox4", TokenVerfy, controller4.box4Answer);
router.get(
  "/qa/answerorgbox4",
  OrganizationTokenVerify,
  controller4.box4AnswerORG
);
router.get("/qa/user/box4/data", TokenVerfy, controller4.loginuserFromData);

// ------------- box5
router.post("/qa/createbox5", TokenVerfy, controller5.CreateBox1Answer);
router.post(
  "/qa/createbox5org",
  OrganizationTokenVerify,
  controller5.CreateBox1AnswerORG
);

router.get("/qa/answerbox5", TokenVerfy, controller5.box5Answer);
router.get(
  "/qa/answerorgbox5",
  OrganizationTokenVerify,
  controller5.box5AnswerORG
);
router.get("/qa/user/box5/data", TokenVerfy, controller5.loginuserFromData);

// ------------- box6
router.post("/qa/createbox6", TokenVerfy, controller6.CreateBox1Answer);
router.post(
  "/qa/createbox6org",
  OrganizationTokenVerify,
  controller6.CreateBox1AnswerORG
);

router.get("/qa/answerbox6", TokenVerfy, controller6.box6Answer);
router.get(
  "/qa/answerorgbox6",
  OrganizationTokenVerify,
  controller6.box6AnswerORG
);
router.get("/qa/user/box6/data", TokenVerfy, controller6.loginuserFromData);

module.exports = router;
