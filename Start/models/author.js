var mongoose = require('mongoose');

console.log('Initializing author schema');

//for Birthdate validation
let minDate = new Date()
minDate.setDate(minDate.getDate() - 1)

var authorSchema = new mongoose.Schema({

    Firstname:{
        type: String,
        required: true,
    },
    Lastname:{
        type: String,
        required: true
    },
    Birthdate:{
        type: Date,
        required: true,
        min: minDate
    },
    Country:{
        type: String,
        default: 'NL'
    },
    Ranking:{
        type: Number,
        min: 1
    },
    Books:[Number]
});

/*
    TODO: 7 - Projecting:
    - fullname is een property die opgehaald wordt
    - age is een property die opgehaald wordt
    - numberOfBooks is een property die opgehaald wordt
*/

mongoose.model('Author', authorSchema);