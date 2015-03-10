
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		debugger;
		var myPicFrame = document.getElementById("displayFrame");
		//var myPic = rpcGetPictureFromMySQL.getMyPicture4({generateRESTRequestOnly:true},"null");
		//var myPic = rpcGetPictureFromMySQL.getMyPicture4();	
		//myPicFrame.src = myPic;
		//var myURL = sendMeData();
		//$$('image1').setValue(myPic);
		myPicFrame.src = myPic;
		
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock

		debugger;
		var myPicFrame = document.getElementById("displayFrame");
		var myPic = rpcGetPictureFromMySQL.getMyPicture3();	
		myPic = "data:application/octet-stream;base64, " + myPic;
		var link = document.createElement('a');
		     document.body.appendChild(link);
		     link.download = "test.pdf";
		     link.href = myPic;
		     link.click();
		     //link.click();
		     document.body.removeChild(link);
		     
		
		//myPicFrame.src = myPic;         //put the Variable that holds the base64 data into the iFrame
		
		//$$('frame1').setValue(myPic);
		
		//myPicFrame.href = myPic;
		//filename = "test.pdf";
		//$("<a download='" + filename + "' href='" + myPic + "'></a>");
		//window.open("myPic");
		//document.location.href = myPic;
		
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		debugger;
		var myPicFrame = document.getElementById("displayFrame");   //get an iFrame ready for display	
		var myPic = rpcGetPictureFromMySQL.getMyPicture2();	
		myPicFrame.src = myPic;         //put the Variable that holds the base64 data into the iFrame
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;         
		//var myPic = rpcGetPictureFromMySQL.getMyPicture1();   //call the RPC that retrieves the image
		//$$('image1').setValue(myPic);     //put the Variable that holds the base64 data into the image1 widget	
		

		            
		var myPic = ds.MySQLPassThrough.getMyPict({generateRESTRequestOnly:true},"null");
		//var myPic = rpcGetPictureFromMySQL.getMyPicture();
		//var myPicFrame = document.getElementById("displayFrame");
		var image1 = document.getElementById("displayFrame");
		$$('image1').setValue(myPic);
		//myPicFrame.src = myPic;
		image1.src = myPic;

		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
