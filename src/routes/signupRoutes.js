const express = require('express');
const signupRouter = express.Router();


function routerSignup(nav){
    
    signupRouter.get('/',function(req,res){
        res.render("signup",{
            nav,
            title: 'Library',
            
        });
    });
    
    
    
    

    return signupRouter;
}

module.exports = routerSignup;