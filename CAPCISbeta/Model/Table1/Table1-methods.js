

model.Table1.methods.method1 = function() {
	//debugger;
	var dbconnect = require('waf-sql');
	var param ={
		hostname: 'localhost',
		user: 'root',
		password: '535CapCis',
		database: 'sakila',
		port: 3306,
		dbType: 'mysql',		
		ssl: false		
};
	var connection = dbconnect.connect(param);
	//if (connection.isconnected)
		{
			//debugger;
			ds.Table1.forEach			
			var dbquery = 'SELECT first_name,last_name,actor_id,actor_picture from actor WHERE first_name = "PENELOPE"'
			var result = connection.execute(dbquery);
			//result = res.getAllRows();
					
			while (result.hasNext())
			{
				var row = result.getNextRow();
				var student = ds.Table1.createEntity();								
				student.remove();
				student.refresh();
				student.firstname = row.first_name;
				student.lastname = row.last_name;
				student.picture = row.actor_picture;
				student.save();				
			};
		};
};
model.Table1.methods.method1.scope = "public";