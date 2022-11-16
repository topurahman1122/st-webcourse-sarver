const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const catedories = require('./data/category.json');
const news = require('./data/news.json');

app.get('/', (req, res) => {
    res.send('st api is running');
});

app.get('/news-categories', (req, res) => {
    res.send(catedories);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08') {
        res.send(news);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/news', (req, res) => {
    res.send(news);
})

app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n = n._id === id);
    res.send(selectedNews);
})

app.listen(port, () => {
    console.log('st course port', port);
})
