const mongoose= require("mongoose");

mongoose.connect("mongodb://localhost:27017/form_task")
.then((req,res)=>{
    console.log("Database Server started");
}).catch((req,res)=>{
    console.log("Error to connecting database");
});

const field= mongoose.Schema({
    label:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    }
});

const user= mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const data= mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    information: {
        type: Object
    }
})

const Users= new mongoose.model("Users", user);

const Fields= new mongoose.model("Fields", field);

const Data= new mongoose.model("Data", data);

module.exports={
    Fields,
    Users,
    Data
}