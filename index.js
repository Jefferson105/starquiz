const express = require("express");
const next = require("next");
const stitch = require("mongodb-stitch")
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(async () => {
    const server = express();
    
    server.use(bodyParser.json());

    var db;
    var collection; 

    // Connect mongo
    try {
        var connection = await MongoClient.connect("mongodb://user:12345@ds251849.mlab.com:51849/starquiz");
        //mongodb://localhost:27017/StarQuiz
        //mongodb://root:starRootQuiz@ds251849.mlab.com:51849/starquiz
        //db = connection.db("starquiz");
        db = connection.db("starquiz");

        //var clientPromise = await stitch.StitchClientFactory.create('starquiz-fwikt');

        //db = clientPromise.service('mongodb', 'mongodb-atlas').db('starquiz');

        //await clientPromise.login();
        collection = await db.collection("pontuation");
    }catch(err) {
        console.error(err);
    }

    // Save pontuation
    server.post("/api/save", async (req, res) => {
        var user = req.body.user;
        var email = req.body.email;
        var pontuation = Number.parseInt(req.body.pontuation);
        
        if(user && email && Number.isInteger(pontuation)) {
            try {
                var insert = await collection.insertOne({ user, email, pontuation });

                console.log(insert);

                res.json({ success: true, message: "Pontuation saved.", data: { user, email, pontuation } }).execute();
            }catch(err) {
                console.log(err)
                res.json({ success: false, error: err });
            }
        }else {
            res.json({ success: false, error: "User, email and pontuation are required." });
        }
    });

    // List all pontuation
    server.get("/api/list", async (req, res) => {
        try {
            var pontuations = await collection.find().sort({ pontuation: -1 }).toArray();
            
            res.json({ success: true, list: pontuations });
        }catch(err) {
            res.json({ success: false, error: err });
        }
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(process.env.PORT || 3001, (err) => {
        //if(err) throw err;
        console.log(`> Ready on http://localhost:${process.env.PORT || 3001}`);
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})