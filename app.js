const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items = ["Buy food", "Cook food", "Eat food",];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function (req, res) {
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
   var day = today.toLocaleDateString("en-US", options);
    res.render("list", {kindOfday: day, newListItems: items});
});

app.post("/", function (req,res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});


app.listen(8000, function () {
    console.log("The server is up and running on 8000");
});
