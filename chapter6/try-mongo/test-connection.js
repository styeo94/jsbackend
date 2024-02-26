
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://styeo94:ioyDaQPRdgojHHCQ@cluster0.qofpazq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    await client.connect();
    const adminDB = client.db('test').admin();
    const listDatabase = await adminDB.listDatabases();
    console.log(listDatabase);
    return "OK";
}
run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
