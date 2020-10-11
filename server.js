const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pg = require('pg');

// connect to db
const conString = process.env.DBNAME
const client = new pg.Client(conString);
client.connect(function (err) {
    if (err) {
        return console.error('Сould not connect to postgres', err);
    }
});

// create server
const app = express();
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Terra Incognita." });
});

app.get('/api/lands', async (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            return res.status(400).json({ message: "Insufficient parameters" });
        }

        client.query(`SELECT * FROM newpr WHERE "Name" LIKE '%${name.toUpperCase()}%'`, function (err, result) {
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            res.send(result.rows);
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});