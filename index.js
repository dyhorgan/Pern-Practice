const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
    } catch (err){
        console.error(err.message);
    }
});

app.listen(3000, () => {
    console.log("Server is Running!!!");
});