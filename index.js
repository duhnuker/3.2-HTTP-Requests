import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1><p>My name is Dinuka</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>Don't call my phone, THANKS!!!!</p>");
});



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})