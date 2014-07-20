//include("./Model/DataClass1/DataClass1methods.js");
//include("./Model.js");
//model.DataClass1.entityMethods.method1 = function()
 {
	//debugger;
	var dbconnect = require('waf-mysql');
	var param ={
		hostname: 'localhost',
		user: 'root',
		password: '535CapCis',
		database: 'sakila',
		port: 3306,
		ssl: false		
};
	var connection = dbconnect.connect(param);
	
	var dbquery = 'SELECT first_name,last_name,actor_id from actor WHERE first_name = "PENELOPE"'
	
	var res = connection.execute(dbquery);
	result = res.getAllRows();
	connection.close()
	
	result;	

//if (connection.isconnected)
	//	{
	//		var result = connection.select("first_name,last_name", "actor");
	//		while (result.hasNext())
	//		{
	//			var row = result.getNextRow();
	//			var student = ds.DataClass1.createEntity();
	//			student.firstname = row.first_name;
	//			student.lastname = row.last_name;
	//			student.save();
				
	//		};
	//	};
	};
