const express = require('express');
const loginRouter = express.Router();


function routerLogin(nav){
    
    loginRouter.get('/',function(req,res){
        res.render("login",{
            nav,
            
        });
    });
    

    return loginRouter;
}

module.exports = routerLogin;