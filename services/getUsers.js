'use strict';

const User = require('../schema/userSchema');

async function getUserService(req){
	let result = await User.find();
	if(result){
		return result;
	}
}

module.exports = getUserService;