'use strict';

const User = require('../schema/userSchema');

let newUser = async function(req){
	console.log('server - ',req.body);
	let user = new User();
	user = Object.assign(user, req.body);
	let result = await user.save();
	if(result){
		return {status: true, msg:'User Saved...!'};
	}

}

module.exports = newUser;