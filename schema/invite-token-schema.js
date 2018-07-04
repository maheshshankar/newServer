'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let inviteSchema = new Schema({
	userId:{type: String, required: true},
	clientId: {type: String},
	appKey:{type: String},
	inviteToken: {type: String},
	appUrl: {type: String},
	inviteToken: {type: String},
	createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('invites', inviteSchema);