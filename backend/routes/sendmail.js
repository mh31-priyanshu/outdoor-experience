const router = require("express").Router();
const nodemailer = require("nodemailer")

router.post("/send", async(req, res)=>{
    console.log(process.env.EMAIL_USER)
    const {email} = req.body;
    const {trek} = req.body;
    const {firstName} = req.body;
    const {paymentID} = req.body;
    const {date} = req.body;

    try{   
        const send_to = email;
        const sent_from = process.env.EMAIL_USER;
        const reply_to = email;
        const subject = "Outdoor Experience - Thanks for booking"
        const message = `
            <h3>Thanks </h3> 
            <h1>Trek Booking Confirmation</h1>
            <p>Dear ${firstName},</p>

            <p>We are excited to inform you that your ticket for the trek "<strong>${trek}</strong>" has been successfully booked!</p>

            <p>Here are the details of your booking:</p>

            <ul>
                <li><strong>First Name:</strong> ${firstName}</li>
                <li><strong>Trek Name:</strong> ${trek}</li>
                <li><strong>Date:</strong> ${date}</li>
                <li><strong>Itinerary is mentioned on our website.</strong></li>

            </ul>

            <p>We look forward to seeing you on the trek!</p>

            <p>Best regards,<br>
            Outdoor Experience</p>
        `
        
        await sendEmail(subject, message, send_to, sent_from, reply_to);
        res.status(200).json({success: true, message:"Email Sent"})
    }catch(err){
        res.status(200).json(err.message)
    }

})

router.get("/receive", async(req, res)=>{
    res.json({
        message:"receive"
    })
})

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        service:"gmail",
        port: "587",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },

        tls:{
            rejectUnauthorized: false,
        }
    })

    const options ={
        from: sent_from,
        to: send_to,
        reply_to: reply_to,
        subject: subject,
        html: message
    }

    transporter.sendMail(options, function(err, info){
        if(err){
            console.log(err)
        }else{
            console.log(info)
        }
    })
}

module.exports = router