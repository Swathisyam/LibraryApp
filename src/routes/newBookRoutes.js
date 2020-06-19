const express = require('express');
const newBookRouter = express.Router();


function routerNewBook(nav){
    
    newBookRouter.get('/',function(req,res){
        res.render("newBook",{
            nav,
            title: 'Library',
            
        });
    });
    

    return newBookRouter;
}

module.exports = routerNewBook;