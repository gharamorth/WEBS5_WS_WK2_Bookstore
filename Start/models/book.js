var mongoose = require('mongoose');

console.log('Initializing books schema');

let minDate = new Date();
minDate.setDate(minDate.Date - 1)

var bookSchema = new mongoose.Schema({

    Title:{
        type: String,
        required: true
    },
    PublishDate:{
        type: Date,
        required: true,
        min: minDate,
    },
    Category:{
        type: String,
        required: true,
    },
    Chapters:[{
        title: String,
        numberOfPages: Number,
    }]

});

/*
TODO: 5 - Virtual property totalNumberOfPages, opgebouwd uit numberOfPages van chapters)
- De benodigde extra validation
- De benodigde query methods
- De benodigde instance methods
*/

mongoose.model('Book', bookSchema);




