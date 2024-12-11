const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userModel=require('./models/user')


const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://<user_name>:<password>@slg-travels-backend.6rws2.mongodb.net/testdb?retryWrites=true&w=majority&appName=SLG-Travels-Backend")

app.post('/login',(req,res) => {
    const {email,password}=req.body;
    userModel.findOne({email:email})
    .then(user =>{ 
        if(user){
            if(user.password==password){
                res.join({message:"Login Successful",user:user});
            }else{
                res.json("the password is incorrect");
            }
        }else{
            res.json("No Record Existed.");
        }
    })
    .catch(err=>res.json({message:'Error occured',error:err}));
})

app.post('./register',(req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
app.listen(4000,()=>{
    console.log("app is running");
})