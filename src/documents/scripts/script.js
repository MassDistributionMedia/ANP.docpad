YUI().use('node', 'event', function (Y) {

	//steam-icon:hover fill:#333
	/*
	Y.one(".splash-join").on('hover', function(){
		Y.one(".steam-icon").setStyle("fill", "#333");
	});
	*/

	function scrolledPast(){
		Y.one('.logo').setStyles({
			width: "33px",
			margin: "19px 0 0"
		})
		Y.one('.abrev').setStyles({
			margin: "-5px 0 0 47px",
			opacity: 0.7
		});
		Y.one('.pure-menu').setStyle('marginTop','-33px');
		Y.one('.header .pure-menu.pure-menu-horizontal>ul').setStyle('margin-left','130px');
	}

	function scrolledTop(){
		Y.one('.logo').setStyles({
			width: "77px",
			margin: 0
		})
		Y.one('.abrev').setStyles({
			margin: 0,
			opacity: 1
		});
		Y.one('.pure-menu').setStyle('marginTop','-13px');
		Y.one('.header .pure-menu.pure-menu-horizontal>ul').setStyle('margin-left','84px');
	}

	Y.on('scroll', function(){
		document.documentElement.scrollTop || document.body.scrollTop < 111 ?
			scrolledTop()
		:   scrolledPast();
	});

});
