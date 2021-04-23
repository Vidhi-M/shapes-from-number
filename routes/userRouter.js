const express = require('express');


const routing = express.Router();

const userController = require('../controller/userController.js');

routing.get('/login',userController.login);
routing.post('/signup',userController.signup);
routing.get('/logout',userController.logout);
routing.all('*',invalid);

async function invalid(req,res){
    res.status(404).json({
        message :'Error'
    })
}

module.exports=routing;