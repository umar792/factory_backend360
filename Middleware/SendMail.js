const nodemailer = require("nodemailer");

const SendMail = (options) => {
  return new Promise(async (resolve, reject) => {
    const transporter = nodemailer.createTransport({
      host: process.env.SMPT_HOST,
      port: process.env.SMPT_PORT,
      service: process.env.SMPT_SERVICE,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      resolve("Email sent successfully");
    } catch (error) {
      console.error("Email not sent:", error);
      reject(error);
    }
  });
};

module.exports = SendMail;
