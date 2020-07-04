const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    urlImg: String,
    Information: String    
} , { collection: 'staff' } );

var Staff = mongoose.model('staff', staffSchema);

module.exports = Staff;