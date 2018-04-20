const express = require("express");
const next = require("next");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(async () => {
    const server = express();
    
    server.use(bodyParser.json());

    var db;

    try {
        var connection = await MongoClient.connect("mongodb://localhost:27017/");
        
        //mongodb://root:starRootQuiz@ds251849.mlab.com:51849/starquiz

        db = connection.db("StarQuiz");
    }catch(err) {
        console.error(err);
    }

    const collection = db.collection("pontuation");

    server.post("/api/save", async (req, res) => {
        var user = req.body.user;
        var email = req.body.email;
        var pontuation = req.body.pontuation;

        if(user && email && Number.isInteger(pontuation)) {
            try {
                await collection.insertOne({ user, email, pontuation });

                res.json({ success: true, message: "Pontuation saved.", data: { user, email, pontuation } });
            }catch(err) {
                res.json({ success: false, error: error });
            }
        }else {
            res.json({ success: false, error: "User, email and pontuation are required." });
        }
    });

    server.get("/api/list", async (req, res) => {
        try {
            var pontuations = await collection.find().sort({ pontuation: -1 }).toArray();
            
            res.json({ success: true, list: pontuations });
        }catch(err) {
            console.log(err);
            res.json({ success: false, error: err });
        }
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3001, (err) => {
        if(err) throw err;
        console.log("> Ready on http://localhost:3001");
    });
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})