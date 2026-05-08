import express from "express";


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

app.listen(port, () => {
    console.log('server on port', port)
})