
var express= require("express");
var router= express.Router();
 const employeeController = require('../controllers/employeee');
 router.post('/', employeeController.submit);

router.get("/", function(req, res){
   
    res.render("index"); 
 });


 

 module.exports = router;