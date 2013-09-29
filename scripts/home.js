YUI().use('node', 'event', function (Y) {

	//steam-icon:hover fill:#333
	Y.one(".splash-join").on({
		mouseover: function(){ Y.one("#steamIcon path").setStyle("fill", "#333"); },
		mouseout : function(){ Y.one("#steamIcon path").setStyle("fill", "#fafafa"); }
	});	

	Y.one(".splash-join").on({
		mouseover: function(){ Y.one(".splash-join-text").setStyle("color", "#333"); },
		mouseout : function(){ Y.one(".splash-join-text").setStyle("color", "#fafafa"); }
	});

});