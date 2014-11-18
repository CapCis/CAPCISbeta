
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		arr1 = ds.MySQLPassThrough.getMyData();
		sources.arr1.sync();
		//var mydata = ds.MySQLPassThrough.getMyData();
		//sources.mySQLPassThrough.sync();
		
		//myFname = [];
		//myLname = [];
		
		//var myResult = ds.MySQLPassThrough.getMyData(myFname,myLname);
		//myFname = myResult[0];
		//myLname = myResult[1];
		//console.log(myFname);
		//arr1 = myResult[0];
		//sources.arr1.sync();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
