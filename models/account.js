const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Username: String,
    Password: String,
    StaffID: String
} , { collection: 'account' } );

var Account = mongoose.model('account', accountSchema);

module.exports = Account;