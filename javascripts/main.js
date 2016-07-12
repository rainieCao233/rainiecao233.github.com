;(function($){
	$(".tab_btn").click(function(e){
		$(".tab_btn").each(function(index,ele){
			$(ele).removeClass("tab_checked");
		});
		$(e.target).addClass("tab_checked");
	});
})(jQuery) 