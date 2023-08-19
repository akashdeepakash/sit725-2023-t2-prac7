const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://akashdeepakashdeep271291:Ar1un%408ha@cluster0.3t94zdr.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect();

module.exports = client;