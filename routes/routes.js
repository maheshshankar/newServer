(function(){
	const express = require('express');
	const bodyParser = require('body-parser');
	const mainRouter = express.Router();
	const mainCtrl = require('../controller/mainCtrl');
	function routes(app){
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({ extended: true}));

		mainRouter.post('/', mainCtrl.saveUser);
		mainRouter.get('/', mainCtrl.getUsers);
		mainRouter.get('/checkUser', mainCtrl.checkUser)
		mainRouter.post('/invite/generate', mainCtrl.generateToken)
		mainRouter.post('/invite/validate', mainCtrl.validateInvite)

		app.use('/server', mainRouter);

	}

	module.exports = routes;
})()