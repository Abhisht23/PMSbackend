const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: [20, 'must not be more than 20'],
        trim: true,
    },
    status: {
        type: Boolean, 
        default: false,
    }
})

module.exports = mongoose.model('Task', Schema);