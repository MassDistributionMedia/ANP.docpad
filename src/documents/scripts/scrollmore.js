 function loadMore()
{
   console.log("More loaded");
    $("body").append("<div>");
   $(window).bind('scroll', bindScroll);
 }

 function bindScroll(){
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
       $(window).unbind('scroll');
       loadMore();
   }
}

$(window).scroll(bindScroll);​

YUI().use('node','event',function(Y){
	function scrollmore(){
		
	}
});