const {model,Schema} = require('mongoose');
const userSchema= new Schema({
   Username: String,
   Password: String,
   Email: String,
   createdAt:String

});

module.exports = model('User',userSchema);