
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		            
		//var myPic = ds.MySQLPassThrough.getMyPict({generateRESTRequestOnly:true},"null");
		var myPic = rpcGetPictureFromMySQL.getMyPicture();   //call the RPC that retrieves the image
		//var myPicFrame = document.getElementById("displayFrame");   //get an iFrame ready for display		
		$$('image1').setValue(myPic);     //put the Variable that holds the base64 data into the image1 widget
		//myPicFrame.src = myPic;         //put the Variable that holds the base64 data into the iFrame
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
