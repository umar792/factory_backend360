const ScheduleModal = require("../Models/SchedularModal");
const UserModal = require("../Models/UserModel");
const organizationModal = require("../Models/OrganizationMoad");
const SendMail = require("../Middleware/SendMail");

module.exports = {
  // ------- create Schedule
  createSchedule: async (req, res) => {
    try {
      const { date, time, email, link } = req.body;
      if (!date) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Date",
        });
      }
      if (!time) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Time",
        });
      }
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Email",
        });
      }

      var isExistEmail =
        (await UserModal.findOne({ email })) ||
        (await organizationModal.findOne({ AdminEmail: email }));
      if (!isExistEmail) {
        return res.status(400).json({
          success: false,
          message: "Sorry, This Email Not Registered.",
        });
      }

      if (req.user.role === "superAdmin") {
        await ScheduleModal.create({
          date,
          time,
          email,
          link,
          user: req.user._id,
          owner: req.user._id,
        });

        // ----- send email
        try {
          await SendMail({
            email: isExistEmail.email
              ? isExistEmail.email
              : isExistEmail.AdminEmail,
            subject: `FactoryAudit360 Schedule Created`,
            message: `Hello ${
              isExistEmail.name
                ? isExistEmail.name
                : isExistEmail.OrganizationName
            } an schedule created by ${
              req.user.name
            } for you please login to your account and check more details`,
          });
          res.status(200).json({
            success: true,
            message: `Schedule Created Successfully, And Mail Send to ${
              isExistEmail.name
                ? isExistEmail.name
                : isExistEmail.OrganizationName
            }`,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      } else {
        await ScheduleModal.create({
          date,
          time,
          email,
          user: req.user._id,
          owner: req.user.user,
        });
        // ----- send email
        try {
          await SendMail({
            email: isExistEmail.email
              ? isExistEmail.email
              : isExistEmail.AdminEmail,
            subject: `FactoryAudit360 Schedule Created`,
            message: `Hello ${
              isExistEmail.name
                ? isExistEmail.name
                : isExistEmail.OrganizationName
            } an schedule created by ${
              req.user.name
            } for you please login to your account and check more details`,
          });
          res.status(200).json({
            success: true,
            message: `Schedule Created Successfully, And Mail Send to ${
              isExistEmail.name
                ? isExistEmail.name
                : isExistEmail.OrganizationName
            }`,
          });
        } catch (error) {
          res.status(400).json({
            success: false,
            message: error.message,
          });
        }
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  // ============ schedule created by oeganization admin
  createSchedulebyOrganization: async (req, res) => {
    try {
      const { date, time, email, link } = req.body;

      if (!date) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Date",
        });
      }
      if (!time) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Time",
        });
      }
      if (!email) {
        return res.status(400).json({
          success: false,
          message: "Plaese Enter Schedule Email",
        });
      }
      var isExistEmail =
        (await UserModal.findOne({ email })) ||
        (await organizationModal.findOne({ AdminEmail: email }));
      if (!isExistEmail) {
        return res.status(400).json({
          success: false,
          message: "Sorry, This Email Not Registered.",
        });
      }

      await ScheduleModal.create({
        date,
        time,
        email,
        link,
        user: req.org._id,
        owner: req.org._id,
      });
      // ----- send email
      try {
        await SendMail({
          email: isExistEmail.email
            ? isExistEmail.email
            : isExistEmail.AdminEmail,
          subject: `FactoryAudit360 Schedule Created`,
          message: `Hello ${
            isExistEmail.name
              ? isExistEmail.name
              : isExistEmail.OrganizationName
          } an schedule created by ${
            req.org.OrganizationName
          } for you please login to your account and check more details`,
        });
        res.status(200).json({
          success: true,
          message: `Schedule Created Successfully, And Mail Send to ${
            isExistEmail.name
              ? isExistEmail.name
              : isExistEmail.OrganizationName
          }`,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          message: error.message,
        });
      }
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //   ------- get all
  getAllSchedules: async (req, res) => {
    try {
      // Retrieve all schedules from the database
      if (req.user.role === "superAdmin") {
        const schedules = await ScheduleModal.find();
        // Check if there are no schedules
        if (schedules.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No schedules found.",
          });
        }

        // Send the schedules as a response
        res.status(200).json({
          success: true,
          message: "Schedules retrieved successfully",
          schedules: schedules,
        });
      } else {
        const schedules = await ScheduleModal.find({
          $or: [{ user: req.user._id }, { email: req.user.email }],
        });
        // Check if there are no schedules
        if (schedules.length === 0) {
          return res.status(404).json({
            success: false,
            message: "No schedules found.",
          });
        }

        // Send the schedules as a response
        res.status(200).json({
          success: true,
          message: "Schedules retrieved successfully",
          schedules: schedules,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving schedules",
        error: error.message,
      });
    }
  },

  // -------- get all by organization
  getAllSchedulesbyorg: async (req, res) => {
    try {
      const schedules = await ScheduleModal.find({ owner: req.org._id });
      // Check if there are no schedules
      if (schedules.length === 0) {
        return res.status(404).json({
          success: false,
          message: "No schedules found.",
        });
      }

      // Send the schedules as a response
      res.status(200).json({
        success: true,
        message: "Schedules retrieved successfully",
        schedules: schedules,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving schedules",
        error: error.message,
      });
    }
  },

  //   -------- get single
  getSingleScheduleById: async (req, res) => {
    try {
      const scheduleId = req.params.id;

      // Retrieve the schedule by ID from the database
      const schedule = await ScheduleModal.findById(scheduleId);

      // Check if the schedule with the given ID exists
      if (!schedule) {
        return res.status(404).json({
          success: false,
          message: "Schedule not found.",
        });
      }

      // Send the schedule as a response
      res.status(200).json({
        success: true,
        message: "Schedule retrieved successfully",
        schedule: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while retrieving the schedule",
        error: error.message,
      });
    }
  },
  deleteScheduleById: async (req, res) => {
    try {
      const scheduleId = req.params.id;

      // Find the schedule by ID
      const schedule = await ScheduleModal.findById(scheduleId);

      // Check if the schedule with the given ID exists
      if (!schedule) {
        return res.status(404).json({
          success: false,
          message: "Schedule not found.",
        });
      }

      // Delete the schedule from the database
      await ScheduleModal.findByIdAndDelete(scheduleId);

      // Send a success message
      res.status(200).json({
        success: true,
        message: "Schedule deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while deleting the schedule",
        error: error.message,
      });
    }
  },
  updateScheduleById: async (req, res) => {
    try {
      const scheduleId = req.params.id;
      const { date, time, email } = req.body;

      // Find the schedule by ID
      const schedule = await ScheduleModal.findById(scheduleId);

      // Check if the schedule with the given ID exists
      if (!schedule) {
        return res.status(404).json({
          success: false,
          message: "Schedule not found.",
        });
      }

      // Update the schedule with the new values
      schedule.date = date;
      schedule.time = time;
      schedule.email = email;
      await schedule.save();

      // Send a success message with the updated schedule
      res.status(200).json({
        success: true,
        message: "Schedule updated successfully",
        updatedSchedule: schedule,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the schedule",
        error: error.message,
      });
    }
  },

  // ====== update status
  updateStatus: async (req, res) => {
    try {
      const { id, status } = req.body;
      if (!status) {
        return res.status(400).json({
          success: false,
          message: "Please Enter Status",
        });
      }
      const data = await ScheduleModal.findById(id);
      if (!data) {
        return res.status(400).json({
          success: false,
          message: "Schedule Not Found",
        });
      }
      data.status = status;
      await data.save();
      res.status(200).json({
        success: true,
        message: "Status Update Successfuly",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "An error occurred while updating the schedule",
        error: error.message,
      });
    }
  },
};
