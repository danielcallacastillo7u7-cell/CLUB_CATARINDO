import express from "express";
import cors from "cors";


const app = express();

const port = process.env.PORT || 3000;

app.get("/prod", (req, res) => {
    res.json([
        {
            id: "10",
            name: "laptop",
        },
    ]);
});

app.listen(port, "0.0.0.0", () => {
    console.log("server on port", port);
});