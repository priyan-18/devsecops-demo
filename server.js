const express = require("express");
const app = express();

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:");

app.get("/", (req, res) => {
    res.send("Hello DevSecOps!");
});

app.get("/user", (req, res) => {
    const id = req.query.id;
    db.all("SELECT * FROM users WHERE id = " + id, (err, rows) => {
        res.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});