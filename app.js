
const express = require('express');
const fileUpload = require('express-fileupload');
methodOverride= require("method-override");
var mongoose=require("mongoose");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();
var employeeRoutes=require("./routes/employees");
// mongoose.Promise= global.Promise;
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(fileUpload());

 


 app.use(express.urlencoded( { extended: true } ));
 

app.use("/", employeeRoutes);
app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  