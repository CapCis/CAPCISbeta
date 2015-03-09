
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
<<<<<<< Updated upstream
	var MultiThreaded_Test = {};	// @button
=======
	var button2 = {};	// @button
>>>>>>> Stashed changes
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

<<<<<<< Updated upstream
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
=======
	button2.click = function button2_click (event)// @startlock
	{// @endlock
		document.getElementById('image1').src = arr1[0].pict;
>>>>>>> Stashed changes
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
<<<<<<< Updated upstream
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
		
=======
		arr1 = ds.MySQLPassThrough.getMyData();
		var mname = arr1[0];
		var inmae = arr1[0].pict;
		arr1[0].pict.type = 'image/jpeg';
		sources.arr1.sync();
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
	WAF.addListener("MultiThreaded_Test", "click", MultiThreaded_Test.click, "WAF");
=======
	WAF.addListener("button2", "click", button2.click, "WAF");
>>>>>>> Stashed changes
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
