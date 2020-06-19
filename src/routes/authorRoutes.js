const express = require('express');
const authorsRouter = express.Router();

function routerAuthors(nav){
    var authors = [
        {
            authorName: 'Arundhathi Roy',
            title: 'Writer, essayist and political activist',
            works: 'The Algebra of Infinite Justice, Kashmir: The Case for Freedom and Capitalism: A Ghost Story.',
            img: 'arundhati-roy.jpg',
            award: 'Won the Man Booker Prize for Fiction in 1997.',
            timeline: '1961',
            para: ' Arundhati Roy, is best known for her novel The God of Small Things which won her the Man Booker Prize for Fiction in 1997. Some of her other works include, The Algebra of Infinite Justice, Kashmir: The Case for Freedom and Capitalism: A Ghost Story.'
            
        }, 
        {
            authorName: 'Khushwant Singh',
            title: 'Journalist, editor and novelist',
            works: 'Train to Pakistan, Delhi: A Novel, The Company of Women, Truth, Love and a Little Malice.',
            img: 'khushwant-singh.jpg',
            award: 'Padma Bhushan in 1974, Padma Vibhushan in 2007.',
            timeline: '1915 - 2014',
            para: 'He was a journalist, editor and novelist born in Hadli during the time of British India. He received his degree at St. Stephen’s College in New Delhi and King’s College in London. He initially started his career as a lawyer after which he got the opportunity to become the editor of important journals and magazines. As an author he wrote some outstanding novels like Train to Pakistan (1956), Delhi: A Novel (1990), The Company of Women (1999), Truth, Love and a Little Malice (2002), The Good, the Bad and the Ridiculous (2013).'
        },
        {
            authorName: 'Sarat Chandra Chattopadhyay',
            title: 'Bengali Novelist',
            works: 'Devdas, Parineeta, Biraj Bau, and Palli Samaj',
            img: 'sarat-chandra-chattopadhyay.jpg',
            award:'For contribution to Bengali Literature awarded with Kuntalin puraskar(1903), Jagattarini Svarna Padak(1923).',
            timeline: '1876 - 1938',
            para: 'He belonged to a poverty-stricken family as his father had irregular jobs. However his father was a dreamer and a writer and it was his exuberance that inspired Sarat to become a novelist himself. He wrote his first famous essays only when he was in his teens. Later, he made contributions to magazines from time to time. Since he was a feminist Chattopadhyay seemed it was urgent to write about the bigotry and patriarchal society. His most popular works are; ‘Devdas’ (1901, published 1917), ‘Parineeta’ (1914), Biraj Bau (1914), and Palli Samaj (1916).'
        },
        {
            authorName: 'R K Narayan',
            title: 'Fictional writer',
            works: 'The dark room, Malgudi Days.',
            img: 'r-k-narayan.jpg',
            award:'Sahitya Akademi Award winner in 1958.',
            timeline: '1906 - 2001',
            para: 'Rasipuram Krishnaswami Iyer Narayanaswami was an Indian writer known for his work set in the fictional South Indian town of Malgudi. He was a leading author of early Indian literature in English.Narayan highlights the social context and everyday life of his characters. He has been compared to William Faulkner who also created a similar fictional town and likewise explored with humour and compassion the energy of ordinary life. His short stories have been compared with those of Guy de Maupassant because of his ability to compress a narrative.',
        },
        {
            authorName: 'Chetan Bhagat',
            title: 'Author, Screenwriter, Columnist',
            works: 'Five Point Someone, 2 States, Half Girlfriend and One Indian Girl.',
            img: 'chetan-bhagat.jpg',
            award:'Featured on Time magazine list of Worlds 100 Most Influential People of 2010 in the Artists category.',
            timeline: '1974  ',
            para: 'Bhagat holds degrees in Mechanical engineering and MBA from prestigious Indian institutions like IIT & IIM respectively. He started his career as an investment banker, but left it after a few years to pursue his passion in writing. He has written eight novels and three non-fiction books.Bhagat is regularly invited as a Motivational Speaker by various institutes and organisations in India and abroad.[14][15] He is also a keen and influential social media enthusiast who shares his thoughts on current issues actively, especially on Twitter and Facebook where he has garnered a combined following of more than 18 million followers.'
        }
    
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",{
            nav,
            title: 'Central Library',
            authors
        });
    });
    
    authorsRouter.get('/:i',function(req,res){
        const i = req.params.i;
        res.render("author",{
            nav,
            title: 'Central Library',
            author: authors[i]
        });
    });

    return  authorsRouter;
}


module.exports = routerAuthors;