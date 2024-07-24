const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/blog-website', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(postRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
