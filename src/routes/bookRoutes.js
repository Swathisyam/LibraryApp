const express = require('express');
const booksRouter = express.Router();

function routerBooks(nav){
    var books = [
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre:  'Novel .',
            img:  'alchemist.jpg',
            para: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988.Originally written in Portuguese, it became a widely translated international bestseller. The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.'
        },
        {
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            genre:  'Science Fiction .',
            img:  'rings.jpg',
            para: 'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.The title of the novel refers to the main antagonist, the Dark Lord Sauron, who had in an earlier age created the One Ring to rule the other Rings of Power as the ultimate weapon in his campaign to conquer and rule all of Middle-earth. '
        },
        {
            title: 'Wings of Fire',
            author: 'A.P.J Abdul Kalam',
            genre:  'Autobiography .',
            img:    'wings.jpg',
            para: 'An Autobiography is an autobiographical novel that tells the readers a story about unlocking their inner potential. Kalam does a great deal to throw light on his journey to igniting the fire within himself. This book is divided into seven parts, and begins with an Introduction and Preface. This is then followed by an Orientation, which contains a quote from the Atharva Veda. '
        },
        {
            title: 'Ancient Indian History',
            author: 'Sailendra Nath Sen',
            genre:  'History .',
            img:    'history.jpg',
            para: 'A single-volume study of Ancient Indian History delineating the various facets, both political and cultural and incorporating the fruits of recent researches that have abundantly appeared since 1950, has not been attempted before. Author has tried to maintain a delicate balance between political history and social, economic and cultural history of ancient India.'
        },
        {
            title: '2 States',
            author: 'Chetan Bhagat',
            genre:  'Novel .',
            img:    '2states.jpg',
            para: 'The story is about a couple Krish and Ananya, who hail from two different states of India, Punjab and Tamil Nadu, respectively, who are deeply in love and want to marry. It is narrated from a first person point of view in a humorous tone, often taking digs at both Tamil and Punjabi cultures.'
        }

    
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",{
            nav,
            title: 'Books',
            books
        });
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id;
        res.render("book",{
            nav,
            title: 'Books',
            book: books[id]
            
        });
    });

    return booksRouter;
}

module.exports = routerBooks;