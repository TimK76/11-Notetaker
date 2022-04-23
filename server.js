const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// function filterByQuery(query, dbArray) {
//     let filteredResults = dbArray;

// })
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get('/public/notes.html', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get('/public/notes.html.:id', (req, res) => {
    const result = findById(req.params.id, db);
    res.sendFile(result);
});

app.post('/public/notes.html', (req, res) => {
    console.log(req.body);
    req.body.id = db.length.toString();
    const db = createNewdb(req.body, db);
    res.json(db);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});