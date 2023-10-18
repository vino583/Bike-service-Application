// Import required libraries and set up Express application
const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors= require("cors");
app.use(cors());
//
const mongoUrl="mongodb+srv://arulvino8:pinovino@cluster0.d4hfrjn.mongodb.net/"  //To connect mongodb by using the url taken from mongodb
mongoose.connect(mongoUrl,{
    useNewUrlParser:true
}).then(()=>{console.log("connected to database");})
.catch(e=>console.log(e))
app.listen(4000, ()=>{
    console.log("Server Started");
});

// Import and define the user registration 
require("./schema/model");
const Collect = mongoose.model("register");
//used for insert the data in registration
app.post("/reg",async(req,res) =>{
    const {name, email, phone,password}=req.body;

    // Check if the provided email already exists in the database
    const chk=await Collect.find({email:email}) 
    console.log(chk);
     // Return an error response if the email is already in use
    if(chk){ 
    return res.status(200).json({error:"Available"});
   }
   else{
    try{
        await Collect.create({
            name,
            email,
            phone,
            password,
        });
        res.send({status:"Ok"});
    }
    catch (error)
    {
        res.send({status:"Erorr"});
    } 
   }
});
//this below code and define the user to book service
require("./schema/model");
const Collect1 = mongoose.model("book");

//This bellow code for used for insert the data in book
app.post("/book",async(req,res) =>{
    const {name, email, phone, vechical,model,date,service}=req.body;
    console.log(name, email, phone, vechical,model,date,service);
    try{
        await Collect1.create({
            name,
            email,
            phone, 
            vechical,
            model,
            date,
            service,
        });
        res.send({status:"Ok"});
    }
    catch (error)
    {
        res.send({status:"Erorr"});
    }
});
// This code below code used to get the data from collection
app.get('/collect1',(req,res) => {
    Collect1.find({}).then((user) => {
        return res.status(200).json(user);
    })
})
// This code below code used to delete the data from collection
app.delete("/deleteser/:id", async(req,res) =>{
    const {id } =req.params;
    //delete the data by using id of the data 
    try{
        Collect1.deleteOne({_id :id}).then(del =>{
            return res.json(del);
        })
    }catch(error){
        console.log(error);
    }
});

//this below code for the admin to add service
require("./schema/model");
const Collect2 = mongoose.model("adds");


//This bellow code for used for insert the data in add 
app.post("/adds",async(req,res) =>{
    const {sname,money,mini,desc}=req.body;
    console.log(sname,money,mini,desc);
    try{
        await Collect2.create({
            sname,
            money,
            mini,
            desc,
        });
        res.send({status:"Ok"});
    }
    catch (error)
    {
        res.send({status:"Erorr"});
    }
});
// This code below code used to get the data from collection
app.get('/collect2',(req,res) => {
    Collect2.find({}).then((user) => {
        return res.status(200).json(user);
    })
})

// This code below code used to delete the data from collection
app.delete("/dele/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await Collect2.deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        return res.json({ status: "Service deleted successfully" });
      } else {
        return res.status(404).json({ status: "Service not found" });
      }
    } catch (error) {
        
      console.error("Error deleting service:", error);
      return res.status(500).json({ status: "Error deleting service" });
    }
  });
  
// This code below code used to update the data from collection
app.get('/update/:id',async (req,res) =>{
    const{id}=req.params;
    console.log(id);
    const old = await Collect1.find({_id:id});
    console.log(old)
    // const news = await Collect1.updateOne({_id:id},{$set:{status:"pending"},{status:"On progress"}});
    const filter = { _id: id };
    const update = { $set: { status: "On progress" } };
    
    try {
      const news = await Collect1.updateOne(filter, update);
      if (news.nModified === 1) {
        console.log("Document updated successfully");
      } else {
        console.log("No document was updated; it might not exist or the status is already 'On progress'");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
    return res.status(200).json({Success:"Updated"});
})
// This code below code used to set complete status for booking
app.get('/complete/:id',async (req,res) =>{
    const{id}=req.params;
    console.log(id);
    const old = await Collect1.find({_id:id});
    console.log(old)
    // const news = await Collect1.updateOne({_id:id},{$set:{status:"pending"},{status:"On progress"}});
    const filter = { _id: id };
    const update = { $set: { status: "Completed" } };
    
    try {
      const news = await Collect1.updateOne(filter, update);
      if (news.nModified === 1) {
        console.log("Document updated successfully");
      } else {
        console.log("No document was updated");
      }
    } catch (error) {
      console.error("Error updating document:", error);
    }
    return res.status(200).json({Success:"Updated"});
})
// This code below code used to insert  the data to login
app.post("/log",async(req,res) =>{
    const {email,pass}=req.body;
    console.log(email,pass);
    const num=/^[0-9]+$/;
    let log;

    try{
        if(num.test(email)){
//this line is used to test the email is availble in registration collection
            console.log("ee")
             log = await Collect.findOne({phone:email}); 
        }
        else{
             log = await Collect.findOne({email:email}); 
        } 

        console.log(log.password);


        console.log(pass);
        //This line used check password is correct then provide success message
        if(log.password==pass){
           return res.status(200).json({Success:"Success"});
        }
        //This line used check password is not correct then send result
        else{
           return res.status(401).json({Error:"User Not Available"});
        }
    }
    catch(err){
        res.status(401).json({Error:err});
    }
})