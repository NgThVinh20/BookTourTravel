const { Tour } = require("../../models/tour.model.js");
module.exports.list = async(req, res) => {
  const tourList = await Tour.find({});
  res.render('client/pages/tour-list.pug', {
    pageTitle:"Trang Danh sách tour",
    tourList: tourList
  });
}

