const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set("view engine", "ejs"); //EJS kullanmak için npm ile yukledikten sonra bu satır gerekli

app.use(bodyParser.urlencoded({ extended: true })); // post ile gelen verileri req.body.veri şeklinde almak için gerekli
app.use(express.static("public")); //statik dosyaalrı express ile yayınlama

app.get("/", (req, res) => {
    var today = new Date();

    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false };
    var day = new Date().toLocaleTimeString("tr-tr", options);

    res.render("list", { day: day, items: items });
});

app.post("/", (req, res) => {
    gelenVeri = req.body.newItem;
    items.push(gelenVeri);
    res.redirect("/");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
