YUI({
//	filter: 'debug', combine: false,
	gallery: 'gallery-2013.06.26-23-09'
}).use(
	'gallery-accordion-horiz-vert',
	'anim-base',
	'node-focusmanager','node','event',
function(Y)
{
	// accordion start
	function onTitleClicked(e, a)
	{
		var t = e.target;
		var i = a.findSection(e.target);
		if (i >= 0)
		{
			a.toggleSection(i);
		}
	}

	function updateFocusMgr()
	{
		var a    = this;
		var keys = a.get('horizontal') ?
			{ next: "down:39", previous: "down:37" } :
			{ next: "down:40", previous: "down:38" };

		var node = a.get('contentBox');
		node.unplug(Y.Plugin.NodeFocusManager);
		node.plug(Y.Plugin.NodeFocusManager,
		{
			descendants: '.yui3-accordion-title a',
			keys:        keys,
			circular:    false,
			focusClass:
			{
				className: a.getClassName('title', 'focused'),
				fn: function (node)
				{
					return node.get('parentNode');
				}
			}
		});
	}

	var vm = new Y.Accordion(
	{
		srcNode: '#accordion-test-vert-markup-content',
		replaceTitleContainer:   false,
		replaceSectionContainer: false,
		allowMultipleOpen:       true
	});

	Y.on('domready', function()
	{
		vm.render('#accordion-test-vert-markup');
		Y.delegate('click', onTitleClicked, '#accordion-test-vert-markup', '.my-title-vert', null, vm);

		updateFocusMgr.call(vm);

		vm.on('insert', function()
		{
			Y.later(1, this, updateFocusMgr);
		});
		vm.on('remove', updateFocusMgr);

		Y.one('.vision-vert').ancestor().addClass('vision-title');
		Y.one('.vision-inner').ancestor().addClass('vision-title');
		Y.one('.mission-vert').ancestor().addClass('mission-title');
		Y.one('.mission-inner').ancestor().addClass('mission-title');
		Y.one('.job-vert').ancestor().addClass('job-title');
		Y.one('.job-inner').ancestor().addClass('job-title');
		// accordion end

	});

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

	Y.one(".soundcloud-btn").on('click', function(){
		Y.one(".soundcloud")
			.toggleClass('sc-tucked')
			.toggleClass('sc-shown');
	});

});
