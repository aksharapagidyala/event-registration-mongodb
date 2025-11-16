const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// MongoDB Connection
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
let db;

async function connectDB() {
    await client.connect();
    db = client.db("eventDB");
    console.log("MongoDB Connected ✔");
}
connectDB();

// Receive Form Data
app.post("/register", async (req, res) => {
    try {
        const data = req.body;

        // Convert event[] array properly
        const events = Array.isArray(data["event[]"]) ? data["event[]"] : [data["event[]"]];

        await db.collection("registration").insertOne({
            name: data.name,
            email: data.email,
            phoneNumber: data.phoneNumber,
            address: data.address,
            state: data.state,
            city: data.city,
            events: events,
            comments: data.comments
        });

        res.send("<h2>Registration Successful ✔</h2>");
    } catch (err) {
        console.error(err);
        res.send("<h2>Error Saving Data ❌</h2>");
    }
});

// Start Server
app.listen(3000, () => {
    console.log("Server running at mongodb://localhost:27017");
});
