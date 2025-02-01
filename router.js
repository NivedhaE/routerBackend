const express=require('express')

const router=express.Router(); //router level middleware
const signupTemplatecopy=require('../models/RegisterModel') //database

router.post("/register",(request,response)=>
{
    const sam=new signupTemplatecopy({
    
        name:request.body.name, //fullname(front end form name=fullName)
        email:request.body.email,
        contact:request.body.contact,
        age:request.body.age,
        jobRole:request.body.jobRole
    })
    sam.save().then(data=>
        {
            response.json(data);
            console.log('Data added successfully');
        }).catch(error=>
            {

                response.json(error)
            })


})


module.exports=router;