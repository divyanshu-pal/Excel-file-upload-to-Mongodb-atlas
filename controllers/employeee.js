
require('../models/database');
var Employee= require("../models/employee");
 var csv = require("fast-csv");

var mongoose=require("mongoose");


exports.submit = async(req,res)=>{
    try{
        if (!req.files)
        return res.status(400).send('No files were uploaded.');
        var employeeFile = req.files.file;
 
    var employee = [];
    csv
       .parseString(employeeFile.data.toString(), {
         headers: true,
         ignoreEmpty: true
        })
       .on("data", function(data){
         data['_id'] = new mongoose.Types.ObjectId();
          
         employee.push(data);
        })
        .on("end", function(){
         Employee.create(employee, function(err, documents) {
            if (err) {throw err;}
            res.redirect("employee");
         });
            console.log(employee);
            
         res.send('File successfully uploaded. ');
        })
}catch(error){
    res.staus(500).send({message: error.message || "Error Occured"});
}
}