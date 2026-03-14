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
let userRole = "user";

app.post("/login",(req,res)=>{

const username = req.body.username;
const password = req.body.password;

if(username === "adm" && password === "adm"){
    userRole = "admin";
    res.redirect("/home");
}

else if(username === "user" && password === "user"){
    userRole = "user";
    res.redirect("/home");
}

else{
    res.send("Invalid Username or Password");
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

app.get("/active-issues",(req,res)=>{
res.send("Active Issues Report");
});

app.get("/membership-list",(req,res)=>{
res.send("Membership Report");
});

app.get("/movies-list",(req,res)=>{
res.send("Movies Report");
});

app.get("/books-list",(req,res)=>{
res.send("Books Report");
});

app.get("/overdue-returns",(req,res)=>{
res.send("Overdue Returns Report");
});

app.get("/pending-requests",(req,res)=>{
res.send("Pending Requests Report");
});

app.listen(3000,()=>{
    console.log("Server running on http://localhost:3000");
});