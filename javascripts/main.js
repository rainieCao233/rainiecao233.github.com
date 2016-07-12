;(function($){ 

    $("a.nav_tab").click(function(e) {
		$("a.nav_tab").each(function(index, ele){
			$(ele).removeClass("on");
		});
		$(e.target).parent().addClass("on");

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                500);
                return false;
            }
        }
    });

    // todo：当scroll发生改变时，监听tab的on状态自动切换

})(jQuery) 