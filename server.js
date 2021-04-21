const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// mail server
const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key: process.env.SENDGRID_API_KEY,
        },
    })
);

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

    try {
        // const response = await transporter.sendMail({
        //     to: reqObj.email,
        //     from: process.env.SENDER_IDENTITY,
        //     subject: "Signup succeeded!",
        //     html:
        //         "<h1>Click The following  <a href='http://localhost:5000'>link</a></h1>",
        // });
        res.status(200).send(reqObj);
    } catch (error) {
        res.status(500).send({ error: error });
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
