const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userModel=require('./models/user')
const UserProfile=require('./models/userprofile')
const router=express.Router()


const app=express()
app.use(express.json())
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://sairam:12345@slg-travels-backend.6rws2.mongodb.net/testdb?retryWrites=true&w=majority&appName=SLG-Travels-Backend")

app.post('/login',(req,res) => {
    const {email,password}=req.body;
    userModel.findOne({email:email})
    .then(user =>{ 
        if(user){
            if(user.password==password){
                res.json({message:"Login Successful",user:user});
            }else{
                res.json({ message: "The password is incorrect" });
            }
        }else{
            res.json({ message: "No record found." });
        }
    })
    .catch(err=>res.json({message:'Error occured',error:err}));
})

app.post('/register',(req,res)=>{
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

router.put('/updateProfile/:userId', async (req, res) => {
    const { userId } = req.params;
    const updatedData = req.body;
  
    try {
      // Find the user profile by userId and update with the new data
      const updatedUser = await UserProfile.findByIdAndUpdate(userId, updatedData, { new: true });
  
      if (updatedUser) {
        res.status(200).json({ message: 'Profile updated successfully!', updatedUser });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error updating profile', error: err.message });
    }
  });

  // API route to get user details
app.get('/api/user/:userId', async (req, res) => {
    const userId = req.params.userId;
    
    try {
      const user = await userModel.findById(userId);
      
      if (!user) {
        console.log(userId,user)
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving user details' });
    }
  });
app.use('./api',router);

app.listen(4000,()=>{
    console.log("app is running");
})