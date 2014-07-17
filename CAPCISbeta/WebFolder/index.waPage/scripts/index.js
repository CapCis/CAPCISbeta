
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button1.dblclick = function button1_dblclick (event)// @startlock
	{// @endlock
		ope
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
	  document.getElementById("button1").innerHTML = "Hello"
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "dblclick", button1.dblclick, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
