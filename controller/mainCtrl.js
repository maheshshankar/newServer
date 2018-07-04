'use strict';

const newUserService = require('../services/registerUser');
const getUserService = require('../services/getUsers');
const checkForUsername = require('../services/checkUsername');
const generateTokenService = require('../services/generate-invite-token');
const validateInviteToken = require('../services/validate-invite-token');

class mainCtrl{
}

mainCtrl.prototype.saveUser = function(req, res) {
    console.log('IN CTRL');
    newUserService(req).then(function(data) {
           res.json(data);
        })
        .catch(function(err) {
            res.json(err);
        })
};

mainCtrl.prototype.getUsers = function(req, res){
	getUserService().then(function(data){
		res.status(200).send(data);
	})
	.catch((err) => {
		res.status(400).send(err.errorMessage);
	})
};

mainCtrl.prototype.checkUser = function(req, res){
    checkForUsername(req).then(function(data){
        if(data.length > 0){
            res.status(200).json({status:true, msg:'Username already exsist'});
        }else{
            res.status(200).json({status:false, msg:'Username Not found'});
        }
    })
    .catch((err) => {
        console.log('err - ',err);
        res.status(400).send(err.errorMessage);
    })
};

mainCtrl.prototype.generateToken = function(req, res){
    generateTokenService(req).then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => {
        res.status(400).send(err.errorMessage);
    })
};

mainCtrl.prototype.validateInvite = function(req, res){
    validateInviteToken(req).then((data) => {
        res.status(200).json({"appKey":data[0].appKey, "appUrl":data[0].appUrl});
    })
    .catch((err) => {
        res.status(400).send(err.errorMessage);
    })
};

module.exports = new mainCtrl;