const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);

const Tour = mongoose.model(
  'Tour',
   {
    name: String,
    Time: String,
    vehicle: String
   },
   "tours"
  );

const path = require('path');
const app = express()
const port = 3000

 
// thiết lập thư mục chứa file view
app.set('views', path.join(__dirname,'views'));
// thiết kaapj Pug làm view engine
app.set('view engine', 'pug');

// thiết lập thư mục public làm thư mục chứa file tĩnh 
app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req, res) => {
  
  res.render('client/pages/home.pug', {
    pageTitle:"Trang chủ"
  });
})

app.get('/tours', async (req, res) => {
  const tourList = await Tour.find({});
  res.render('client/pages/tour-list.pug', {
    pageTitle:"Trang Danh sách tour",
    tourList: tourList
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// thanhvinh
// 20122005