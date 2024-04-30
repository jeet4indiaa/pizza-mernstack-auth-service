import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("welcome to Auth Service");
});

export default app;
