const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'testing',
	type: "mysql",
	port: 3308,
	user : 'root',
	password : ''
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('MySQL Database is connected Successfully');
	}
});

module.exports = connection;