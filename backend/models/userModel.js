const mongoose =require('mongoose')

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        default:null
        
    },
    age:{
        type: Number,
        default:0
    
    },
    phone:{
        type:Number,
        default:000
       
    },
    role:{
        type:Number,
        default:0
    },
    cart:{
        type: Array,
        default:[]
    },
    
      
})

module.exports=mongoose.model("clients", userSchema)