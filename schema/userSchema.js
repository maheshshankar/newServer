'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name:{type: String, required:true},
	username:{type: String, required:true},
	email:{type: String, required:true},
	password:{type: String, required:true}

})

UserSchema.pre('save', function(next){
	let user = this;
	bcrypt.hash(user.password, null, null, function(err, hasedPassword){
		if(err){
			console.log('Error While Hasing the password');
		}
		user.password = hasedPassword;
		next();
	})
})

module.exports = mongoose.model('newAng5Users', UserSchema);