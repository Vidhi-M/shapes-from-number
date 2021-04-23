const express = require('express');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const session = require('express-session');
const user = require('./model/user');
const cookieParser = require('cookie-parser');
const { route } = require('./routes/userRouter');
const userController = require('./controller/userController');
const app=express();




mongoose.connect(
  'mongodb+srv://user1:Admin12@cluster0.rfjki.mongodb.net/shapeDatabse?retryWrites=true&w=majority',
  {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true,
  }
)
.then((result)=>{
  console.log('Database Connected');
})

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());



const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log("Server started at",  `${port}`);
});

module.exports=app;