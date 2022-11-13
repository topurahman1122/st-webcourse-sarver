const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const catedories = require('./data/category.json');


app.get('/', (req, res) => {
    res.send('st api is running');
});

app.get('/news-categories', (req, res) => {
    res.send(catedories);
})
app.listen(port, () => {
    console.log('st course port', port);
})
