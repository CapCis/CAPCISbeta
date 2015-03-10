/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcGetPictureFromMySQL' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcGetPictureFromMySQL.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};



exports.getMyPicture1 = function getMyPicture() {
	
	var dbconnect = require('waf-sql');
	var param = 
	{
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
		
	var connection = dbconnect.connect(param);
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%wick%"');
	MyResults = result.getAllRows();
	var varBinArray = MyResults[0];
	var varBinObject = varBinArray.pict;
	var varBinBlobToBuffer = varBinObject.toBuffer();
	var varBinBufferToString = "data:image/jpeg;base64, " + varBinBlobToBuffer.toString('base64');		
	connection.close;
	return varBinBufferToString;
	
	
};

exports.getMyPicture2 = function getMyPicture() {
	
	var dbconnect = require('waf-sql');
	var param = 
	{
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
		
	var connection = dbconnect.connect(param);
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%wick%"');
	MyResults = result.getAllRows();
	var varBinArray = MyResults[0];
	var varBinObject = varBinArray.pict;
	var varBinBlobToBuffer = varBinObject.toBuffer();
	var varBinBufferToString = "data:image/jpeg;base64, " + varBinBlobToBuffer.toString('base64');			
	connection.close;
	return varBinBufferToString;
	
		
};




exports.getMyPicture3 = function getMyPicture() {
	
	var dbconnect = require('waf-sql');
	var param = 
	{
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
		
	var connection = dbconnect.connect(param);
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%Dylan%"');
	MyResults = result.getAllRows();
	var varBinArray = MyResults[0];
	var varBinBlob = varBinArray.pict;
	var varBinBlobToBuffer = varBinBlob.toBuffer();
	var varBinBufferToString = "data:application/octet-stream;base64, " + varBinBlobToBuffer.toString('base64');
	var varBinBufferToString = varBinBlobToBuffer.toString('base64');			
			
	connection.close;
	return varBinBufferToString;
	
	
};

exports.getMyPicture4 = function getMyPicture() {
	
	var dbconnect = require('waf-sql');
	var param = 
	{
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
	};
	
	debugger;	
	var connection = dbconnect.connect(param);
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%Dylan%"');
	MyResults = result.getAllRows();
	var varBinArray = MyResults[0];
	var varBinBlob = varBinArray.pict;	
	
	
	//response.contentType = 'application/octet-stream';
	//response.headers['content-disposition'] = 'attachement; filename=test.pdf';
	//response.body = varBinBlob;
	
	
	var varBinBlobToBuffer = varBinBlob.toBuffer(); 						//create buffer
	var varBinBufferToString = varBinBlobToBuffer.toString('base64'); 		//convert buffer to string base64
	var myAwsomeFile = File("c:/Temp/awsomefile.jpg"); 							//create fictional file
	varBinBlob.copyTo(myAwsomeFile,true);
	//var myBinaryStream = BinaryStream(myAwsomeFile, "Write", 1000); 		//create BinaryStream
	//myBinaryStream.putString(varBinBufferToString); 						//put the base64 string into the BinaryStrem
	
	
	
	//var varBinBufferToString = "data:application/octet-stream;base64, " + varBinBlobToBuffer.toString('base64');
				
			
			
	connection.close;
	return {HTTPStream: varBinBlob, headers: {"Content-Type": "image/jpeg"}};
	 
	return varBinBufferToString;
	
	
};