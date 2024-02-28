const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://styeo94:<패스워드>p@cluster0.qofpazq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/board";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
}