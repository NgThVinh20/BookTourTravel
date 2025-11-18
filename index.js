const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);

const tourController = require("./controllers/client/Tour.controller.js")
const homeController = require("./controllers/client/home.controller.js")



const path = require('path');
const app = express()
const port = 3000

 
// thiết lập thư mục chứa file view
app.set('views', path.join(__dirname,'views'));
// thiết kaapj Pug làm view engine
app.set('view engine', 'pug');

// thiết lập thư mục public làm thư mục chứa file tĩnh 
app.use(express.static(path.join(__dirname,'public')));


app.get('/',homeController.home)

app.get('/tours', tourController.list)

 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// thanhvinh
// 20122005