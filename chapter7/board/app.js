const express = require("express");
const postService = require("./services/post-service");
const handlebars = require("express-handlebars");
const app = express();

const mongodbConnection = require("./configs/mongodb-connection");

// req.body와 POST 요청을 해석하기 위한 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
    "handlebars",
    handlebars.create({
        helpers: require("./configs/handlebars-helpers"),
    }).engine,
);

app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");

app.get("/", async (req, res) => {
    // res.render("home", { title: "테스트 게시판" });
    const page = parseInt(req.query.page) || 1;
    const search = req.query.search || "";

    try {
        const [posts, paginator] = await postService.list(collection, page, search);
        res.render("home", { title: "테스트 게시판", search, paginator, posts });
    } catch (error) {
        console.error(error);
        res.render("home", { title: "테스트 게시판" });
    }
});

app.get("/write", (req, res) => {
    res.render("write", { title: "테스트 게시판", mode: "create" });
});

app.post("/write", async (req, res) => {
    // res.render("write", { title: "테스트 게시판" });
    const post = req.body;
    // 글쓰기 후 결과 반환
    const result = await postService.writePost(collection, post);
    // 생성된 도큐먼트의 _id로 상세 이동
    res.redirect(`/detail/${result.insertedId}`);
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