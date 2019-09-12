const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),


DB =  'mongodb+srv://admin-julius:Test123@cluster0-azhwi.mongodb.net/paymecityDB';

const app = express();
app.use(cors());

const businessRoute = require('./routes/business.route');
mongoose.Promise = global.Promise;
mongoose.connect(DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use(bodyParser.json());
app.use('/employees', businessRoute);
app.use('/', express.static(path.join(__dirname, "angular")));
const port = 8081;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use((req, res, next) => {
  const index = (path.join(__dirname, 'angular/index.html')).toString();
  res.sendFile(index);
});

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
