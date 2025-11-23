const express = require('express');
require('dotenv').config();

// ket noi toi co so du lieu
const connectDatabase = require('./config/database.config.js');
connectDatabase();


const clientRouter = require("./routes/client/index.route.js")

const path = require('path');
const app = express()
const port = 3000

 
// thiết lập thư mục chứa file view
app.set('views', path.join(__dirname,'views'));
// thiết kế Pug làm view engine
app.set('view engine', 'pug');

// thiết lập thư mục public làm thư mục chứa file tĩnh 
app.use(express.static(path.join(__dirname,'public')));


app.use('/', clientRouter);


 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// thanhvinh
// 20122005