let mongoose = require('mongoose');
Book = mongoose.model('Book');
Author = mongoose.model('Author');

let author_seed = [
	// TODO: 3 - Testdata voor authors maken.

	// Vul hier je testdata voor authors in 
	// In je /models/book.js staat welke velden je nodig hebt.
    {
        Firstname: "Sjakie",
        Lastname: "Bruvmeister",
        Birthdate: new Date(1990, 5, 20),
        Country: "NL",
        Ranking: 1,
        Books: [1],
    }, 
    {
        Firstname: "Stephan",
        Lastname: "Enter",
        Birthdate: new Date(1973, 11, 12),
        Country: "NL",
        Ranking: 2,
        Books: [2]
    }, 
    {
        Firstname: "John",
        Lastname: "Tolkien",
        Birthdate = new Date(1973, 9, 2),
        Country: "EN",
        Books: [3, 4, 5]

    }
    
];

let book_seed = [
	// TODO: 4 - Testdata voor boeken maken.
	{
        Title: "Fabriek jonguh",
        PublishDate: new Date(1970, 1, 1),
        Category: "Horror",
        Chapters:[
            {
                title: "First one",
                numberOfPages: 5
            },
            {
                title: "Second one",
                numberOfPages: 500
            }
        ]
    }, 
    {
        Title: "Grip",
        PublishDate: new Date(2011, 11),
        Category: "Drama",
        Chapters:[
            {
                title: "Een",
                numberOfPages: 10
            },
            {
                title: "Twee",
                numberOfPages: 5
            }
        ]
    }, 
    {
        Title: "Fellowship of the Ring",
        PublishDate: new Date(1954, 7, 29),
        Category: "High Fantasy",
        Chapters:[
            {
                title: "Party",
                numberOfPages: 10
            },
            {
                title: "Let's go on an adventure",
                numberOfPages: 5
            }
        ]
    },
    {
        Title: "The Two Towers",
        PublishDate: new Date(1954, 7, 29),
        Category: "High Fantasy",
        Chapters:[
            {
                title: "Party",
                numberOfPages: 10
            },
            {
                title: "Let's stab Saruman",
                numberOfPages: 5
            }
        ]
    },
    {
        Title: "The Return of the King",
        PublishDate: new Date(1954, 7, 29),
        Category: "High Fantasy",
        Chapters:[
            {
                title: "Damn that's a big volcano",
                numberOfPages: 10
            },
            {
                title: "Let's stab Sauron",
                numberOfPages: 5
            }
        ]
    }

];

module.exports = function(){
    let Book = mongoose.model('Book');
    Book.find({}).then(books => {
        if(!books.length){
            console.log('\tNo books found, filling testdata');
            Book.insertMany(book_seed)
                .then(() => console.log('\tFilling book testdata succesfull'))
                .catch(err => console.log('\tFilling book testdata failed', err));
        }
    });

    let Author = mongoose.model('Author');
    Author.find({}).then(authors => {
        if(!authors.length){
            console.log('\tNo authors found, filling testdata');
            Author.insertMany(author_seed)
                .then(() => console.log('\tFilling author testdata succesfull'))
                .catch(err => console.log('\tFilling author testdata failed', err));
        }
    });
}