const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    Name: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },

},{
    collection : "User"
})

module.exports = mongoose.model('User',userSchema)