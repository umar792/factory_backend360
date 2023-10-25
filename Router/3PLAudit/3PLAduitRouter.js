const express = require("express");
const router = express.Router();
const controller1 = require("../../Controller/3PLAudit/Box1Controller");
const controller2 = require("../../Controller/3PLAudit/Box2Controller");
const controller3 = require("../../Controller/3PLAudit/Box3Controller");
const controller4 = require("../../Controller/3PLAudit/Box4Controller");
const controller5 = require("../../Controller/3PLAudit/Box5Controller");
const controller6 = require("../../Controller/3PLAudit/Box6Controller");
const controller7 = require("../../Controller/3PLAudit/Box7Controller");
const controller8 = require("../../Controller/3PLAudit/Box8Controller");
const controller9 = require("../../Controller/3PLAudit/Box9Controller");
const TokenVerfy = require("../../Middleware/TokenVerify");
const organizationTokenVerfy = require("../../Middleware/OrganizationToken");

// ======== box1
router.post("/createbox1", TokenVerfy, controller1.CreateBox1);
router.post(
  "/createboxorg1",
  organizationTokenVerfy,
  controller1.CreateBox1Org
);
router.get("/answerbox1", TokenVerfy, controller1.box1Answer);
router.get("/answerorgbox1", organizationTokenVerfy, controller1.box1AnswerORG);
router.delete("/box1/delete/:id", controller1.deleteForm);

// ==========box2
router.post("/createbox2", TokenVerfy, controller2.CreateBox2);
router.post(
  "/createboxorg2",
  organizationTokenVerfy,
  controller2.CreateBox2ORG
);
router.get("/answerbox2", TokenVerfy, controller2.box2Answer);
router.get("/answerorgbox2", organizationTokenVerfy, controller2.box2AnswerORG);
router.get("/box2/from/data", TokenVerfy, controller2.loginuserFromData);
router.delete("/box2/delete/:id", controller2.deleteForm);

// ==========box3
router.post("/createbox3", TokenVerfy, controller3.CreateBox3);
router.post(
  "/createboxorg3",
  organizationTokenVerfy,
  controller3.CreateBox3ORG
);
router.get("/answerbox3", TokenVerfy, controller3.box3Answer);
router.get("/answerorgbox3", organizationTokenVerfy, controller3.box3AnswerORG);
router.get("/box3/from/data", TokenVerfy, controller3.loginuserFromData);
router.delete("/box3/delete/:id", controller3.deleteForm);

// ==========box4
router.post("/createbox4", TokenVerfy, controller4.CreateBox4);
router.post(
  "/createboxorg4",
  organizationTokenVerfy,
  controller4.CreateBox4ORG
);
router.get("/answerbox4", TokenVerfy, controller4.box4Answer);
router.get("/answerorgbox4", organizationTokenVerfy, controller4.box4AnswerORG);
router.get("/box4/from/data", TokenVerfy, controller4.loginuserFromData);
router.delete("/box4/delete/:id", controller4.deleteForm);

// ==========box5
router.post("/createbox5", TokenVerfy, controller5.CreateBox5);
router.post(
  "/createboxorg5",
  organizationTokenVerfy,
  controller5.CreateBox5ORG
);
router.get("/answerbox5", TokenVerfy, controller5.box5Answer);
router.get("/answerorgbox5", organizationTokenVerfy, controller5.box5AnswerORG);
router.get("/box5/from/data", TokenVerfy, controller5.loginuserFromData);
router.delete("/box5/delete/:id", controller5.deleteForm);

// ==========box6
router.post("/createbox6", TokenVerfy, controller6.CreateBox6);
router.post(
  "/createboxorg6",
  organizationTokenVerfy,
  controller6.CreateBox6ORG
);
router.get("/answerbox6", TokenVerfy, controller6.box6Answer);
router.get("/answerorgbox6", organizationTokenVerfy, controller6.box6AnswerORG);
router.get("/box6/from/data", TokenVerfy, controller6.loginuserFromData);
router.delete("/box6/delete/:id", controller6.deleteForm);

// ==========box7
router.post("/createbox7", TokenVerfy, controller7.CreateBox7);
router.post(
  "/createboxorg7",
  organizationTokenVerfy,
  controller7.CreateBox7ORG
);
router.get("/answerbox7", TokenVerfy, controller7.box7Answer);
router.get("/answerorgbox7", organizationTokenVerfy, controller7.box7AnswerORG);
router.get("/box7/from/data", TokenVerfy, controller7.loginuserFromData);
router.delete("/box7/delete/:id", controller7.deleteForm);

// ==========box8
router.post("/createbox8", TokenVerfy, controller8.CreateBox8);
router.post(
  "/createboxorg8",
  organizationTokenVerfy,
  controller8.CreateBox8ORG
);
router.get("/answerbox8", TokenVerfy, controller8.box8Answer);
router.get("/answerorgbox8", organizationTokenVerfy, controller8.box8AnswerORG);
router.get("/box8/from/data", TokenVerfy, controller8.loginuserFromData);
router.delete("/box8/delete/:id", controller8.deleteForm);

// ==========box9
router.post("/createbox9", TokenVerfy, controller9.CreateBox9);
router.post(
  "/createboxorg9",
  organizationTokenVerfy,
  controller9.CreateBox9ORG
);
router.get("/answerbox9", TokenVerfy, controller9.box9Answer);
router.get("/answerorgbox9", organizationTokenVerfy, controller9.box9AnswerORG);
router.get("/box9/from/data", TokenVerfy, controller9.loginuserFromData);
router.delete("/box9/delete/:id", controller9.deleteForm);

module.exports = router;
