//require modules for the User Model
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = mongoose.Schema
(
    {
        username:
        {
             type: String,
             default:'',
             trim: true,
             requirement: 'username is required'
        },
        /*
        password:
        {
             type: String,
             default:'',
             trim: true,
             requirement: 'password is required'
        }
        */
       email:
       {
        type: String,
        default:'',
        trim: true,
        requirement: 'email address is required'
       },
       displayName:
       {
        type: String,
        default:'',
        trim: true,
        requirement: 'Display Name is required'
       },
       created:
       {
        type: Date,
        default: Date.now,
       },
       update:
       {
        type: Date,
        default: Date.now,
       }
    },
    {
        collection: "users"
    }
);

// configure options for User Model

var options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);