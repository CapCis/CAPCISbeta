

model.Table1.methods.method1 = function() {
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
	//if (connection.isconnected)
		{
			var result = connection.select("first_name,last_name", "actor");
			while (result.hasNext())
			{
				var row = result.getNextRow();
				var student = ds.Table1.createEntity();
				student.firstname = row.first_name;
				student.lastname = row.last_name;
				student.save();				
			};
		};
};
model.Table1.methods.method1.scope = "public";