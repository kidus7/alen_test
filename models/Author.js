const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    bio:{
        type: String,
    },
    timeCreated: {
        type: Date,
        default: () => Date.now(),
    },
    books: {
        type: [String],
    }
});

module.exports = mongoose.model('Author', authorSchema);