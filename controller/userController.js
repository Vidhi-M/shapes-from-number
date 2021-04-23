const user = require('../model/user');
const session = require('express-session');
const bcrypt = require('bcrypt');


const SES_Name='user';


exports.signup = async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        const currentUser = await user.find({username:username});
        console.log(currentUser);
        if(currentUser[0] == null)
        {
            if(password.length >=6)
            {
                
                const saltRound =12;
                const salt = await bcrypt.genSalt(saltRound);
                const hashPass = await bcrypt.hash(password,salt);
                const createdUser = await user.create({username:username,password:hashPass});
                res.status(201).json({
                    status:'success',
                    message:`User created successfully: ${username}`
                });
            }
            else{
                console.log('Password is short');
                res.status(400).json({
                    status:'fail',
                    message:`Password must be atleast 6 characters long.`
                })
            }
        }
        else{
            console.log(`User already exists with Username ${username}`);
            res.status(400).json({
                status:'fail',
                message:`User already exists with Username ${username},try different username.`
            });
        }
    }catch(err)
    {
        console.log(err);
        res.status(500).json({
            message:`An error has occured: ${err}`
        });
    }}







    