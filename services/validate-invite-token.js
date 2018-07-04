'use strict';

const InviteToken = require('../schema/invite-token-schema');
const moment = require('moment');

console.log(moment().diff("2018-07-01T09:27:36.007Z", 'days'))
async function validateInviteToken(req){
	let result = await InviteToken.find({inviteToken: req.body.inviteToken});
	if(result){
		console.log(result);
		if((moment().diff(result[0].createdOn, 'days')) <=7){
			return result;			
		}
	}
};


module.exports = validateInviteToken;