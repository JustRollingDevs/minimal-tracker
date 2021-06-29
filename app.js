const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// app.use(helmet());
app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect to mongodb & listen for requests
const dbURI = process.env.dbURI;
mongoose.Promise = global.Promise;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) => app.listen(process.env.PORT || 3000))
  .catch((err) => console.log(err));

// put dist in public
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use('/api', taskRoutes);
//
