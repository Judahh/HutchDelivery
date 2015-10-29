// load the things we need
let mongoose = require('mongoose');
let bcrypt   = require('bcrypt-nodejs');

export class User{
    // define the schema for our user model
    var userSchema = mongoose.Schema({
    
        local            : {
            email        : String,
            password     : String
        },
        facebook         : {
            id           : String,
            token        : String,
            email        : String,
            name         : String
        },
        twitter          : {
            id           : String,
            token        : String,
            displayName  : String,
            username     : String
        },
        google           : {
            id           : String,
            token        : String,
            email        : String,
            name         : String
        }
    
    });
    
    // generating a hash
    userSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    
    // checking if password is valid
    userSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.local.password);
    };
}