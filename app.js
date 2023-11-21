const express = require("express")
const collection = require("./mongo")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/signin",async(req,res)=>{
    const{signInEmail,signInPassword} = req.body

    try{
       const check = await collection.findOne({signInEmail:signInEmail})
       if(check){
        res.json("exist")
       }
       else{
        res.json("notexist")
       }
    }
    catch(e){
        res.json("notexist")
    }
})

app.post("/signup",async(req,res)=>{
    const{signUpName,signUpEmail,signUpPassword} = req.body

    const data={
        name:signUpName,
        email:signUpEmail,
        password:signUpPassword
    }

    try{
       const check = await collection.findOne({signUpEmail:signUpEmail})
       if(check){
        res.json("exists")
       }
       else{
        res.json("notexist")
        await collection.insertMany([data])
       }
    }
    catch(e){
        res.json("notexist")
    }
})

app.listen(3000,()=>{
    console.log("port connected");
})