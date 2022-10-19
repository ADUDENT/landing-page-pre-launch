// Author: Nkululeko Mbhele
// Organisation: Adudent
// Purpose: To manage emails storage


'use strict';
// [START app]
const cors = require("cors");
const bodyParser = require('body-parser');
const express = require('express')
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const app = express()

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let allowlist = ['http://localhost:3000']
let corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    callback(null, corsOptions) // callback expects two parameters: error and options
}

let connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DB
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


// Create a new testimonial // Done
app.post('/api/create', cors(corsOptionsDelegate), (req, res) => {
    console.log(req.body)
    let sql = `INSERT INTO testimonials 
    (name, testimonial, service, link, linktype, linkname)
    VALUES('${req.body.name}', '${req.body.testimonial}', '${req.body.service}', '${req.body.link}', '${req.body.linktype}', '${req.body.linkname}')`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("New Testimonial Created");
    });
    res.send({body: req.body});
});

// See all testimonials // Done
app.get('/api/testimonials', cors(corsOptionsDelegate), (req, res) => {

    let sql = "SELECT * from testimonials";
    connection.query(sql, function (err, result) {
        console.log("Testimonials Queried");
        console.log(result);
        if (err) throw err;
        res.send({testimonials: result});
    });
});

// Update a testimonial // Done
app.post('/api/update', cors(corsOptionsDelegate), (req, res) => {
    let id = req.params.id;
    let sql = `UPDATE testimonials
                SET name = '${req.body.name}', testimonial = '${req.body.testimonial}', service = '${req.body.service}', link = '${req.body.link}', linktype = '${req.body.linktype}', linkname = '${req.body.linkname}'
                WHERE id = ${id}`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Row Updated");
        res.send({message: "updated", status: 200});
    });
});


// Delete a testimonial // Done
app.post('/api/delete/', cors(corsOptionsDelegate), (req, res) => {
    let id = req.params.id;
    let sql = `DELETE FROM testimonial WHERE id='${id}'`;
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(`Testimonial ${id} deleted`);
        {}
        res.send({message: "Deleted", status: 200});
    });
});




app.get('/', cors(corsOptionsDelegate), (req, res) => {
    res.send('Awesome Testimonial App');
});





// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

module.exports = app;