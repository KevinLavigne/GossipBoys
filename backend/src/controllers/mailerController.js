const nodemailer = require("nodemailer");
require("dotenv").config();

class sendMailer {
  static sendMail = (req, res) => {
    const { email, subject, category } = req.body;
    const message =
      "Hello, someone invited you to bitch about them , dont wait and start bitching now!  http://localhost:3000/dashboard/5";

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_SENDIN,
      port: process.env.SMTP_PORT_SENDIN,
      secure: false,
      auth: {
        user: process.env.SMTP_SENDIN_USER,
        pass: process.env.SMTP_SENDIN_PASSWORD,
      },
    });

    const mailOptions = {
      from: "lavigne.kevin.pro@gmail.com",
      to: email, // this is the address to which the email will be sent
      subject: subject,
      text: `${message} \n\n categorie: ${category} \n\n Email: ${email}`,
      html: `<p>${message}</p> <p>categorie: ${category}</p> <p>Email: ${email}</p>`,
    };

    return transporter
      .sendMail(mailOptions)
      .then((info) => {
        console.warn(info);
        res.status(200).send("Message sent");
      })
      .catch((err) => {
        console.warn(err);
        res.status(500).send(req.body);
      });
  };
}

module.exports = sendMailer;
