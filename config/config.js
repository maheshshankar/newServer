(function(){
	function configuration(app){
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
			res.header('Access-Control-Allow-Headers', 'content-type,Authorization');
			next();
		})
	}

	module.exports = configuration;
})()