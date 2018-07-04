const express = require('express');
const app = express();
const port = process.env.port || 6789;
const route = require('./routes/routes')(app);
require('./config/config')(app);
require('./db/dbConnections')(app);

app.listen(port, (err)=>{
	if(err){
		console.log('Err Connecting Server');
	}else{
		console.log(`server started Listening at ${port}`);
	}
})
