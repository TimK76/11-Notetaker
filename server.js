const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
uuidv4();

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// get JSON
app.use('/api', apiRoutes);
// get HTML
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
module.exports = express
module.exports = router