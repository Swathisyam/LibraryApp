const express = require('express');
const newBookRouter = express.Router();


function routerNewBook(nav){
    
    newBookRouter.get('/',function(req,res){
        res.render("newBook",{
            nav,
            title: 'New Book',
            
        });
    });
    

    return newBookRouter;
}

module.exports = routerNewBook;