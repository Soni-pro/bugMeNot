const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./server/database/connection');
const bodyParser = require('body-parser')

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 7000;

const app = express();

// contect to DB
connectDB();

// parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs'); // set view engine


// load assets : using middleware method
app.use('/css', express.static(path.resolve(__dirname,"assets/css")));
app.use('/img', express.static(path.resolve(__dirname,"assets/img")));
app.use('/js', express.static(path.resolve(__dirname,"assets/js")));

// app.get('/',(req,res)=>{
//     res.status(200).render('index');
// })

// app.get('/terms-condition',(req,res)=>{
//     res.status(200).render('terms-condition');
// })

// app.get('/app-person',(req,res)=>{
//     res.status(200).render('app-person');
// })


// load routers
app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{
    console.log(`listening port ${PORT}`);
})
