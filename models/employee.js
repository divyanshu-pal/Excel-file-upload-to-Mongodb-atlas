var mongoose=require("mongoose");

// Creating EmployeeSchema 
var employeeSchema = new mongoose.Schema({
   name:String,
   Email:{
      type: String,
      unique: true,
      required: true
   },
   Mobile_No:String,
   Date_of_Birth:String,
   work_Experience:String,
   Resume_Title:String,
   Current_Location:String,
   Postal_Address:String,
   Current_Employer:String,
   Current_Designation:String
});

//Exporting Employee Schema
module.exports = mongoose.model("Employee", employeeSchema);
