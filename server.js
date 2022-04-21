const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const { db } = require('./db/db.json');

// function filterByQuery(query, dbArray) {
//     let filteredResults = dbArray;

// })
app.get('/api/db', (req, res) => {
    let results = db
    console.log(req.query)
    res.json(results);
});

app.get('api/db:id', (req, res) => {
    const result = findById(req.params.id, db);
    res.json(result);
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});