const mongoose = require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/MhcLogin")
.then(()=>{
    console.log("mongodb connected");
})
.catch((err)=>{
    console.log(err)
})

const newSchema = new mongoose.Schema({
    signUpName:{
        type:String,
        required:true
    },
    signUpEmail:{
        type:String,
        required:true
    },
    signUpPassword:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports= collection;