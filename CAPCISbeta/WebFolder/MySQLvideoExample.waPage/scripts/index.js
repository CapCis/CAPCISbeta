﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var dataGrid2 = {};	// @dataGrid
	var documentEvent = {};	// @document
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		debugger;
		//$$('seeResultData').setValue(rpcMySQLvideoExample.getSakilaActorTable('first_name');
		
		
	};// @lock

	dataGrid2.onCellClick = function dataGrid2_onCellClick (event)// @startlock
	{// @endlock
		var selectedFN = $$('dswidgetFN').getValue();		//get the value of the widget field in the grid with ID of dswidgetFN
	    var selectedLN = $$('dswidgetLN').getValue();
		var selectedAID = $$('dswidgetAID').getValue();   
		
		$$('showmeselectedname').setValue(selectedFN);      //put the variable into a text label on the page with the ID of showmeselectedname
		$$('showmeselectedid').setValue(selectedAID);		//put the variable into a text label on the page with the ID of showmeselectedid
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		debugger;
		
		mySakilaSource = rpcMySQLvideoExample.getSakilaActorTable();
		
		sources.mySakilaSource.sync();
		//sources.table1.all();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("dataGrid2", "onCellClick", dataGrid2.onCellClick, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
