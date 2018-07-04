'use strict';

const InviteToken = require('../schema/invite-token-schema');
const randomKey = require('./generate-random-key');
const moment = require('moment');


function getExpiryDate(fullDate){
	fullDate.setDate(fullDate.getDate() + 7);
	return moment(fullDate).format('DD/MM/YYYY HH:mm:ss')
};

async function generateInviteToken(req){
	let userDetails = req.body;
	let result = await InviteToken.findOne({userId: userDetails.userId});
	if(result.length === 0){
		let newInvite = new InviteToken();
		let generatedInvite = randomKey();
		newInvite = Object.assign(newInvite, userDetails);
		newInvite.inviteToken = generatedInvite;
		let newUser = await newInvite.save();
			if(newUser){
				return {inviteToken: newUser.inviteToken, validTo: getExpiryDate(newUser.createdOn)};
			}
	}else{
		return {inviteToken: result[0].inviteToken, validTo: getExpiryDate(result[0].createdOn)}
	}
}


module.exports = generateInviteToken;