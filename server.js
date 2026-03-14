const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if(username === "admin" && password === "1111"){
        userRole = "admin";
        res.redirect("/home");
    }
    else{
        userRole = "user";
        res.redirect("/home");
    }

});

app.get("/home",(req,res)=>{
    res.render("home");
});

app.get("/maintenance", (req, res) => {

    if(userRole === "admin"){
        res.render("maintenance");
    }
    else{
        res.send("Access Denied. Only Admin can access Maintenance Module.");
    }

});
app.get("/reports",(req,res)=>{
    res.render("reports");
});

app.get("/transactions",(req,res)=>{
    res.render("transactions");
});

app.get("/add-book",(req,res)=>{
    res.render("addBook");
});

app.get("/update-book",(req,res)=>{
    res.render("updateBook");
});

app.get("/add-membership",(req,res)=>{
    res.render("addMembership");
});

app.get("/update-membership",(req,res)=>{
    res.render("updateMembership");
});

app.get("/issue-book",(req,res)=>{
    res.render("issueBook");
});

app.get("/return-book",(req,res)=>{
    res.render("returnBook");
});

app.get("/pay-fine",(req,res)=>{
    res.render("payFine");
});

app.get("/search-book",(req,res)=>{
    res.render("searchBook");
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});