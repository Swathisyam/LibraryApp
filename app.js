const express = require('express');


const app = express();

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name: 'Login'
    },
    {
        link:'/signup',name:'Signup'
    },
    {
        link:'/newBook',name:'Add Book'
    }
];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(nav);
const signupRouter = require('./src/routes/signupRoutes')(nav);
const newBookRouter = require('./src/routes/newBookRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/newBook',newBookRouter);


app.get('/', function(req,res){
    res.render("index",
    {
        nav, 
        title: ' Central Library'
    });
});


app.listen(5000); 