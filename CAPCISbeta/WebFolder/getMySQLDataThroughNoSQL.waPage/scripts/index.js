
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var MultiThreaded_Test = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	MultiThreaded_Test.click = function MultiThreaded_Test_click (event)// @startlock
	{// @endlock
		ds.MySQLPassThrough.getMyData2({onSuccess: handleOnReturnDS,
		onError: function(event){
			alert(event.error[0].message);
		}})
		
		
	function handleOnReturnDS(event) { 				//Function to handle onSuccess
		arr1 = event.result;
		sources.arr1.sync(); 
	}	
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//arr1 = ds.MySQLPassThrough.getMyData();						//synchronous call to server
		//sources.arr1.sync();											//synchronous call to server
		
	ds.MySQLPassThrough.getMyData({onSuccess: handleOnReturnDS,
		onError: function(event){
			alert(event.error[0].message);
		}})
		
		
	function handleOnReturnDS(event) { 				//Function to handle onSuccess
		arr1 = event.result;
		sources.arr1.sync(); 
	}	
		
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
	WAF.addListener("MultiThreaded_Test", "click", MultiThreaded_Test.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
