

model.MySQLPassThrough.methods.getMyData = function(fname,lname) {
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
		
	//var result = connection.select("firstname,lastname","test_table",{lastname: "Levey"});
	//var result = connection.execute("SELECT * FROM test_table WHERE id_testtable1 > '0'");
	//var result = connection.execute('SELECT * FROM test_table WHERE CONTAINS(lastname,"e")');   //Correct Syntax does not return string
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%ev%"');
	var MyResults = result.getAllRows();
	
	
	// Create a 10 second pause 
	var sleep = 20000   //sleep timer = 10 seconds
	var start = new Date().getTime();   //set the reference time
	for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > sleep){
      break;
  	  };
    };
   
    
    
	connection.close;
	return MyResults;
	//while (result.hasNext()) {
	//	var MyResults = result.getNextRow();
		
	    //fname.push(MyResults.firstname);
	    //lname.push(MyResults.lastname);
	     	
	//	ds.MySQLPassThrough.name = result.getNextRow();
	//var myFirstName = result.getNextRow();
	//var look = myFirstName.firstname
	//	debugger;
	
	//return [fname, lname];      //Returns an Array that holds two arrays fname and lname
};

model.MySQLPassThrough.methods.getMyData2 = function(fname,lname) {
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
		
	//var result = connection.select("firstname,lastname","test_table",{lastname: "Levey"});
	//var result = connection.execute("SELECT * FROM test_table WHERE id_testtable1 > '0'");
	//var result = connection.execute('SELECT * FROM test_table WHERE CONTAINS(lastname,"e")');   //Correct Syntax does not return string
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%ev%"');
	MyResults = result.getAllRows();
	
	
	// Create a 10 second pause 
	//var sleep = 10000   //sleep timer = 10 seconds
	//var start = new Date().getTime();   //set the reference time
	//for (var i = 0; i < 1e7; i++) {
    //if ((new Date().getTime() - start) > sleep){
    //  break;
  	//  };
    //};
   
    
    
	connection.close;
	return MyResults;
	//while (result.hasNext()) {
	//	var MyResults = result.getNextRow();
		
	    //fname.push(MyResults.firstname);
	    //lname.push(MyResults.lastname);
	     	
	//	ds.MySQLPassThrough.name = result.getNextRow();
	//var myFirstName = result.getNextRow();
	//var look = myFirstName.firstname
	//	debugger;
	
	//return [fname, lname];      //Returns an Array that holds two arrays fname and lname
};


model.MySQLPassThrough.methods.getMyPict = function(blank) {
	var dbconnect = require('waf-sql');
	var param ={
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
	
	var result = connection.execute('SELECT * FROM test_table WHERE lastname LIKE "%wick%"');
	MyResults = result.getAllRows();
	var varBinBlob = MyResults[0].pict;
	var varBinBlobToBuffer = varBinBlob.toBuffer();
	//var varBinBufferToString = "data:image/jpeg-stream;base64, " + varBinBlobToBuffer.toString('base64');
	//var mypicfile = BinaryStream('c:/Temp/TempBinaryStream.jpg','Write'); 						//working ver 1
	//mypicfile.putBlob(varBinBlob,0); 																//working ver 1
	//myFile = File("c:/Temp/TempBinaryStream.jpg");												//working ver 1
	connection.close;
	
	return varBinBufferToString;
	return {HTTPStream: varBinBufferToString, headers: {"Content-Type": "image/jpeg"}};  							//working ver 1
	
};
model.MySQLPassThrough.methods.getMyData.scope = "public";
model.MySQLPassThrough.methods.getMyData2.scope = "public";
model.MySQLPassThrough.methods.getMyPict.scope = "public";