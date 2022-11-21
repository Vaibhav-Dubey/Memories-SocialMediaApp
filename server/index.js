import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

import postsRoutes from './routes/posts.js'
const app = express();

app.use('/posts',postsRoutes);

app.use(bodyParser.json({limit:"30mb", extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}))



app.use(cors());

const CONNECTION_URL = 'mongodb+srv://VaibhavAdmin:KF5AvMRoU07kgKJZ@cluster0.gobid00.mongodb.net/?retryWrites=true&w=majority'

const PORT   =  process.env.PORT || 5000 ; 

mongoose.connect(CONNECTION_URL ,{useNewURLParser:true,useUnifiedTopology: true}) 
    .then(()=>app.listen(PORT , ()=> console.log('server running')))
    .catch((error)=>console.log(error.message));

