const express = require("express");
const fetch = require("node-fetch");
const XMLHttpRequest = require('xhr2');
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.use(bodyParser.urlencoded({
    extended: true
}))

// app.post("/", (req, res) => {
//     console.log(req.body)
//     var title = req.body.title;
//     var author = req.body.author;
//     res.send("Hello " + title + ", Thank you for subcribing. You Author is " + author);
//     var request = new XMLHttpRequest();
//     request.open('GET', 'http://localhost:8082/api/books');
//     request.send();
//     request.onload = ()=>{
//     console.log(JSON.parse(request.response));
// }
// });

app.post("/", (req, res) => {
    console.log(req.body)
    var title = req.body.title;
    var isbn = req.body.isbn;
    var author = req.body.author;
    var price = req.body.price;
    var origin = req.body.origin;
    var pages = req.body.pages;
    var published_year = req.body.published_year;
    var stock = req.body.stock;
    if (req.body.isdigital == "Yes") {
        var isdigital = 1;
    } else {
        var isdigital = 0;
    }
    // var isdigital = req.body.isdigital;

    // POST request using fetch()
    fetch("https://bookstore-backend276.herokuapp.com/api/books", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify({
                title: title,
                isbn: isbn,
                author: author,
                price: price,
                origin: origin,
                pages: pages,
                published_year: published_year,
                stock: stock,
                isdigital: isdigital
            }),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        // Converting to JSON
        .then(response => response.json())
        // Displaying results to console
        .then(json => console.log(json));
    console.log("Success");
    res.send("Hurray <h2>" + title + " </he>Book is inserted Successfully!");
    // var request = new XMLHttpRequest();
    // request.open('GET', 'http://localhost:8082/api/books');
    // request.send();
    // request.onload = ()=>{
    // console.log(JSON.parse(request.response));
});
