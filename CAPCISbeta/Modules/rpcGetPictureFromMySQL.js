/*	In order to make the helloWorld() function available client-side, you have to add a reference to the 'rpcGetPictureFromMySQL' module in the GUI Designer.
	The helloWorld() function can be executed from your JS file as follows:
	alert(rpcGetPictureFromMySQL.helloWorld());
	
	For more information, refer to http://doc.wakanda.org/Wakanda0.Beta/help/Title/en/page1516.html
*/
exports.helloWorld = function helloWorld () {
	return ('Hello world');
	
};



exports.getMyPicture = function getMyPicture() {
	
	var dbconnect = require('waf-sql');
	var param ={
		hostname: '68.106.70.68',
		user: 'teamcapcis2',
		password: 'teamcapcis2',
		database: 'test',
		port: 3306,
		ssl: false,
		dbType: 'mysql'
}
		
	var connection = dbconnect.connect(param);
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%wick%"');
	MyResults = result.getAllRows();
	var varBinArray = MyResults[0];
	var varBinObject = varBinArray.pict;
	var varBinBlobToBuffer = varBinObject.toBuffer();
	var varBinBufferToString = varBinBlobToBuffer.toString('hex');	
	var mypicfile = BinaryStream('c:/Temp/TempBinaryStream.txt','Write');
	mypicfile.putBuffer(varBinBlobToBuffer,0);	
	connection.close;
	return {HTTPStream: mypicfile, headers: {'Content-Type': "image/jpeg"}}
//return {HTTPStream: MyResults}
	
}