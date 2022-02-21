const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
const mongoose = require('mongoose');

const bodyParser=require('body-parser')
mongoose.connect("mongodb+srv://knapster:knapster@cluster0.genwt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true },{UnhandledPromiseRejection:true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log("MongoDB runnning as well"))

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(express.json())

const usersRouter = require('./routes/users')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', usersRouter);


app.listen(5000, () => {
    console.log("Server Started");
})