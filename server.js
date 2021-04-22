const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// SendGrid - mail server
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY,
        },
    })
);

// Mail Gun - Mail Server (Back up for high availablity)
const mailgun = require("mailgun-js");

const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, (error) => {
    if (error) throw error;
    console.log("server running on port " + port);
});

app.post("/signup", async (req, res) => {
    const reqObj = req.body;

    reqObj.verified = false;

    myCache.set(reqObj.email, reqObj, 0);

    const emailObjData = {
        to: reqObj.email,
        from: "",
        subject: "Successfully Signed Up - Account Verification!",
        html:
            "<h1>Click The <a href='http://localhost:3000/account-verification'>link</a> to verify your account</h1>",
    };

    try {
        emailObjData.from = process.env.SENDGRID_SENDER_IDENTITY;

        const response = await transporter.sendMail(emailObjData);

        res.status(200).send({ status: "success", data: response });
    } catch (error) {
        try {
            emailObjData.from = process.env.MAILGUN_SENDER_IDENTITY;

            const response = await mg.messages().send(emailObjData);

            res.status(200).send({ status: "success", data: response });
        } catch (error) {
            res.status(500).send(error);
        }
    }
});

// successfull email
app.get("/signup/:email", async (req, res) => {
    console.log(myCache.get("test@gmail.com"));

    res.status(200).send({ succes: "test" });
});

// app.post("/signup/{email}", (req, res) => {
//     myCache.get();
//     res.status(200).send({ succes: "reached backend" });
// });
