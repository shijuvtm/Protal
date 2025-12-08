var express = require('express');
var router = express.Router();
var db = require("../config/connection");
var collection = require("../config/collection");
const userHelpers = require('../helpers/user-helper');
const { response } = require('../app');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.post('/submit',(req,res)=>{
  console.log("Received req.body:", req.body);  // Debugging line
  userHelpers.DataLog(req.body).then((response)=>{
 console.log(response);
res.redirect('/display');
});
});
router.get("/display", (req, res) => {
  userHelpers.getAllData().then((data) => {
    res.render("display", { title: "Stored Data", data });
  });
});
module.exports = router;
