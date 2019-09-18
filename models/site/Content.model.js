var mongoose = require('mongoose');

var ContentSchema = new mongoose.Schema({
    section: {
        header: Boolean,
        content: String
    }
});

var Content = mongoose.Model('Content', ContentSchema);

module.exports = Content;