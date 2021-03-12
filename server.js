if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config() ;
}
// load() is deprecated so we use config()
const express= require('express') 
const app = express() 
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')  

// the node module HAS to be in the root file 

app.set('view engine','ejs');
app.set('views',__dirname + '/views') 
app.set('layout','layouts/layout') 
app.use(expressLayouts)  
app.use(express.static('public'));

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser : true })
    const db = mongoose.connection ;  
    db.on('error',error =>console.log(' connection to DB failed'))
    db.once('open',error =>console.log(' successfully connected to DB'))
    //;once to open one time 
// old url parser is depricated
app.use('/',indexRouter) 
// allows me to serve the static files in public 
const PORT= process.env.PORT || 3000 ;
app.listen(PORT, ()=>console.log("App is running on port "+ PORT ) ) ;
 
