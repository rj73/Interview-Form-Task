const express= require('express');
const { Fields, Users, Data } = require('../db');
const formRouter= express.Router();

formRouter.post('/fields', async(req,res)=>{
    const body= req.body;
    if(!body && typeof(body.label)!=String && typeof(body.type)!=String){
        return res.send("Wrong inputs in body");
    }
    const data= await Fields.create(body);
    if(data){
       return res.json({
            msg: "Field created succesfully"
        })
    }
    else{
        return res.json({
            msg: "Something wrong while creating a user"
        })
    }
    
})



formRouter.get('/fields', async(req,res)=>{
    const data=await Fields.find();
    if(!data){
        return res.json({
            msg: "Something wrong while getting feilds"
        })
    }
   return res.json(data);
    
})

formRouter.post('/user', async(req,res)=>{
    const body= req.body;
    if(!body.username && !body.password){
        return res.json({
            msg: "Wrond body username and password is required"
        })
    }
    const data= await Users.create({
        username: body.username,
        password: body.password
    })
    if(data){
        return res.json({
            msg: "User is created successfully"
        })
    };
    return res.json({
        msg: "Somethign wrong while sgining up"
    })

})


formRouter.post('/form', async(req,res)=>{
    const information= req.body.information;
     const userId= req.headers.userid;

     if(!information || !userId){
        return res.json({
            msg: "Wrong userID or body for form"
        })
     }
     const data= await Data.create({
        userId: userId,
        information: information
     })
     if(data){
        return res.json({
            msg: "User information is subbmmittted successsfully"
        })
     }
     return res.json({
        msg: "Something wrong with storing user information"
     })

})



formRouter.get('/form', async(req,res)=>{
   const userId = req.headers.userid;
   if(!userId){
    return res.json({
        msg: "Send the correct userId"
    })
   }

   const data= await Data.find({
    userId: userId
   });

   if(data){
    if(data[data.length-1].information){
        return res.json(data[data.length-1].information);
    }
    else{
        return res.send("You haven't submit any information yet");
    }
   }
   return res.json({
    msg: "Something wrong to get the information of the user"
   })
})



module.exports={
    formRouter
}