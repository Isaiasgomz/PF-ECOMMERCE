const nodemailer = require('nodemailer');



require('dotenv').config();

const {
    DB_EMAIL, DB_EMAIL_PASSWORD
  } = process.env;
  

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: DB_EMAIL, // generated ethereal user
        pass: DB_EMAIL_PASSWORD, // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = async (email, subject, textHTML) => {
    try {
        console.log("entro a send email: ",email )
        let info = await transporter.sendMail({
            from: "prequestecommerce@gmail.com", // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: textHTML,  // html body
        });
        
        return info
    } catch (error) {
        return error
    }
}
