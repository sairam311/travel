const mongoose=require('mongoose')

const itemschema=new mongoose.Schema({
    name:String,
    description:String,
})

const itemModel=mongoose.model("item",itemschema)
module.exports=itemModel