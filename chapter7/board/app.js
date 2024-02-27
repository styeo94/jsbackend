const express = require("express");
const handlebars = require("express-handlebars");
const app = express();

const mongodbConnection = require("./configs/mongodb-connection");

app.engine(
    "handlebars",
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);

app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("home", { title: "테스트 게시판" });
});

app.get("/write", (req, res) => {
    res.render("write", { title: "테스트 게시판" });
});

app.get("/detail/:id", (req, res) => {
    res.render("detail", { title: "테스트 게시판" });
});


let collection;
app.listen(3000, async () => {
    console.log("Server start");
    const mongoClient = await mongodbConnection();
    collection = mongoClient.db().collection("post");
    console.log("MongoDB connected");
});