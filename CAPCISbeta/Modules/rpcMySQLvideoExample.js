/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcMySQLvideoExample' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcMySQLvideoExample.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};

exports.getSakilaActorTable = function getSakilaActorTable() {
	
	debugger;
	
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
	
};





exports.putSakilaActorTable = function putSakilaActorTable() {
	debugger;
	
	//var mypicfile = File("c:/temp/Desert.jpg");
	var mypicfile = BinaryStream('c:/temp/Desert.jpg','Read')
	//var mypicfile = BinaryStream("c:/temp/sometext.txt","Read",7);
	
	//var blobtotext = "";
	var mybinstreamsize = mypicfile.getSize();	
	var bintobuffer = mypicfile.getBuffer(mybinstreamsize);
	//var buffertostring = bintobuffer.toString('ascii');     //works in returning string values
	var buffertostring = bintobuffer.readInt32LE();
		
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
	//var dbquery = 'SELECT first_name,last_name,actor_id,actor_picture from actor WHERE first_name = "PENELOPE"'
	//var res = connection.execute(dbquery);
	var dbquery = 'INSERT INTO actor (first_name,last_name,actor_picture) VALUES (myfirstname,mylastname,'+buffertostring+')';
	//var dbquery = 'INSERT INTO actor (actor_picture) VALUES'(mypicfile);
	//var res = connection.execute('INSERT INTO actor(first_name) VALUES("myname")');
	//var res = connection.insert( "actor" , [ {first_name:"Jones"}]);
	//var res = connection.insert( "People" , [ {first_name:"Jones" , last_name:"helpme"}]); 
	var res = connection.execute(dbquery);             	
	connection.close();	
	return res;
};






exports.puttextfileintomysql = function puttextfileintomysql() {
	
	
	var mytextstream = new TextStream("c:/temp/sometext.txt","Read",7);                    //create textstream
	
	var mytextstreamdata = "";                                                                  
	var mytextstreamsize = mytextstream.getSize();	                                       //get file size
	mytextstreamdata = mytextstreamdata + mytextstream.read(mytextstreamsize);	           //read the file
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
	var dbquery = 'INSERT INTO actor (first_name,last_name,actor_picture) VALUES ("myfirstname","mylastname","'+mytextstreamdata+'")';	
	var res = connection.execute(dbquery);             	
	connection.close();	
	return res;
}