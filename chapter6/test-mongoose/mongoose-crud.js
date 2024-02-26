const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Person = require("./person-model");

mongoose.set("strictQuery", false); //1

const app = express();
app.use(bodyParser.json()); //2
app.listen(3000, async () => {
  console.log("Server started");
  const mongodbUri = "mongodb+srv://styeo94:<패스워드>@cluster0.qofpazq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  //3
  mongoose
    .connect(mongodbUri, {})
    .then(console.log("Connected to MongoDB"));

});


//4
app.get("/person", async (req, res) => {
  console.log("person")
  const person = await Person.find({});
  res.send(person);
});

//5
app.get("/person/:email", async (req, res) => {
  const person = await Person.findOne({ email: req.params.email });
  res.send(person);
})

//6
app.post("/person", async (req, res) => {
  //const reuslt = await Person.create(req.body);
  const person = new Person(req.body);
  await person.save();
  res.send(person);
});

//7
app.put("/person/:email", async (req, res) => {
  const person = await Person.findOneAndUpdate(
    { email: req.params.email },
    { $set: req.body },
    { new: true }
  );
  console.log(person);
  res.send(person);
});

//6
app.delete("/person/:email", async (req, res) => {
  await Person.deleteMany({ email: req.params.email });
  res.send({ success: true });
});