const mongoose = require('mongoose');
//Default Port is 27017
//Database is = movies
//useNewUrlParser (false by default but true here to opt in to new MongoDB Url logic)
//useUnifiedTopology (false by default but complains if not included)
mongoose.connect('mongodb://localhost:27017/moviesApp', { useNewUrlParser: true, useUnifiedTopology: true });

