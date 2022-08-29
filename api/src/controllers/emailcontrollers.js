const nodemailer = require('nodemailer');



require('dotenv').config();


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "ecommerce.pullrequest@gmail.com", // generated ethereal user
        pass: "lqwjfsgrdhlynaqw", // generated ethereal password
    },
    tls: {
        rejectUnauthorized: false
    }
});

exports.sendEmail = async (email, subject, textHTML) => {
    try {
        console.log("entro a send email")
        let info = await transporter.sendMail({
            from: "ecommerce.pullrequest@gmail.com", // sender address
            to: email, // list of receivers
            subject: subject, // Subject line
            html: textHTML,  // html body
        });
        
        return info
    } catch (error) {
        return error
    }
}
