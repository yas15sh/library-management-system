const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));   // IMPORTANT LINE

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/* Home Page */
app.get("/", (req, res) => {
    res.render("home");
});

/* Issue Book Page */
app.get("/issue-book", (req, res) => {
    res.render("issueBook");
});

/* Return Book Page */
app.get("/return-book", (req, res) => {
    res.render("returnBook");
});

/* Pay Fine Page */
app.get("/pay-fine", (req, res) => {
    res.render("payFine");
});

/* Add Membership Page */
app.get("/add-membership", (req, res) => {
    res.render("addMembership");
});

/* Add Book Page */
app.get("/add-book", (req, res) => {
    res.render("addBook");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});