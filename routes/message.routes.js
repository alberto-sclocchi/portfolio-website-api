const router = require("express").Router();
const Message = require("../models/Message.model")
const transporter = require("../config/nodemailer")

router.post("/", (req, res, next) => {
    console.log(req.body);

    if(req.body.firstName === "" || req.body.lastName === ""  || req.body.email  === "" ||req.body.number  === "" ||req.body.subject === ""  ||req.body.message === "" ){
        res.json({message: "Please fill in the required info before proceeding."});
        return;
    }

    Message.create(req.body)
    .then((message) => {

        transporter.sendMail({
            from: "albe.sclocchi@mgail.com",
            to: "scloks75tv@gmail.com",
            subject: `${message.firstName} ${message.lastName} | ${message.subject}`,
            text: "Thank you for signing up", 
            html: `<p>${message.firstName} ${message.lastName} has sent you the following message: </p>
            <hr>
            <p>"${message.message}"<p/>
            <hr>
            <p><b>Email: </b>${message.email}<p/>
            <p><b>Phone Number: </b>${message.number}<p/>`
        });

        res.json({success: true})
    })
    .catch((err) => {
        res.json({success: false, err: err})
    })
});

module.exports = router;
