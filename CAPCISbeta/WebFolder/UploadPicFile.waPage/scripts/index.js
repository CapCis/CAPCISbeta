
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @button
	var button6 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		//debugger;
		var res = rpcMySQLvideoExample.putSakilaActorTable();
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		debugger;
		var fName = $$('fileUpload1').getFiles();
		var fNamefound = fName[0].name
		$$('textField1').setValue(fNamefound)
		fNamefound = fNamefound
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
// @endregion
};// @endlock
