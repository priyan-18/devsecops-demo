const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello DevSecOps!");
});

app.get("/exec", (req, res) => {
    exec(req.query.cmd, (err, stdout) => {
        if (err) {
            return res.send(err.message);
        }
        res.send(stdout);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});