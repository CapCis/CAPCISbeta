/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcMySQLvideoExample' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcMySQLvideoExample.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};

exports.getSakilaActorTable = function getSakilaActorTable() {
	
	//debugger;
	
	//var dbconnect = require('waf-mysql');    NOW OUTDATED!!!!?
	var dbconnect = require('waf-sql');
	var param ={
		hostname: 'localhost',
		user: 'root',
		password: '535CapCis',
		database: 'sakila',
		port: 3306,
		ssl: false,
		dbType: 'mysql'		
};
	var connection = dbconnect.connect(param);
	
	var dbquery = 'SELECT first_name,last_name,actor_id,actor_picture from actor WHERE first_name = "PENELOPE"'
	
	var res = connection.execute(dbquery);
	result = res.getAllRows();
	connection.close()	
	return result;
	
		
	
	
	
}