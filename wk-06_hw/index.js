let express = require('express');

let app = express();

let data = {
    "data" : [
        {
          "title": "Pride and Prejudice",
          "author": "Jane Austen",
          "year_published": 1813
        },
        {
          "title": "Moby-Dick",
          "author": "Herman Melville",
          "year_published": 1851
        },
        {
          "title": "1984",
          "author": "George Orwell",
          "year_published": 1949
        },
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "year_published": 1925
        },
        {
          "title": "War and Peace",
          "author": "Leo Tolstoy",
          "year_published": 1869
        },
        {
          "title": "Crime and Punishment",
          "author": "Fyodor Dostoevsky",
          "year_published": 1866
        },
        {
          "title": "To Kill a Mockingbird",
          "author": "Harper Lee",
          "year_published": 1960
        },
        {
          "title": "The Catcher in the Rye",
          "author": "J.D. Salinger",
          "year_published": 1951
        },
        {
          "title": "Brave New World",
          "author": "Aldous Huxley",
          "year_published": 1932
        },
        {
          "title": "The Odyssey",
          "author": "Homer",
          "year_published": "8th Century BC"
        }
      ]
}

app.use('/', express.static('public'));

app.get('/data', (req,res )=> {
    res.json(data);
})

app.get('/data/:author', (req,res)=> {
    console.log(req.params.author);
    res.send("thank you");
})



app.listen(3000, ( ) => {
    console.log("App is listening at localhost: 3000");
})