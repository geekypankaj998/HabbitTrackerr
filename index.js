const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose.js');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const Habit = require('./modals/habit');

app.use(express.urlencoded()); //Fetching content during Posting from Forms 
app.use(express.static(path.join(__dirname,'/assets'))); //telling express the location for assets
// app.use(expressLayouts);   //This needs to be done before routing as there we are using views //will be only needed if I added a layout otherwise no need

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));


app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
      console.log('Error occured on loading server : ',err);
      return;
    }
    console.log('Server running on  port : ',port);
})