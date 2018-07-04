'use strict';

const User = require('../schema/userSchema');

async function checkUserService(req){
	console.log(req.query);
	let user = req.query.username;
	let result = await User.find({username: user});
	if(result){
		return result;
	}
}

module.exports = checkUserService;