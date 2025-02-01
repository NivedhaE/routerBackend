const express=require('express');
const app=express();
const mongoose=require('mongoose')
const cors=require('cors');
app.use(express.json());//middleware
app.use(cors())

const routerurl=require('./router/router') //db+router
app.use('/app',routerurl);
//mongodb connection
if(mongoose.connect('mongodb+srv://db-nivi:Mininivi8499@cluster0.wmxjq.mongodb.net/registration?retryWrites=true&w=majority&appName=Cluster0'))
    {
        console.log('database connected')
    }

app.listen(4000,()=>
{
    console.log('Server is connected with port no 4000');
})