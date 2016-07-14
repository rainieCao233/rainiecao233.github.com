
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

    // todo: a.nav_tab的on状态根据scroll变化

    // 切换主题
    $("a.theme_color").click(function(e){
        var _id = e.target.id;

        $("a.theme_color").removeClass("active");
        $(e.target).addClass("active");
        
        switch(e.target.id)
        {
            case 'purple':
                $(".welcome_part").css({"background":"url(./images/pic01.jpg) no-repeat","background-size":"100% 100%"});
                $(".sidebar").css("background","rgb(109, 85, 115)");
                $(".mask").css("background","rgba(109, 85, 115, 0.3)");
                break;
            // case 'green':
            //     $(".welcome_part").css({"background":"url(./images/pic02.jpg) no-repeat","background-size":"100% 100%"});
            //     $(".sidebar").css("background","rgb(89, 117, 89)");
            //     $(".mask").css("background","rgba(172, 210, 172, 0.3)");
            //     break;
            case 'red':
                $(".welcome_part").css({"background":"url(./images/pic03.jpg) no-repeat","background-size":"100% 100%"});
                $(".sidebar").css("background","rgb(134, 98, 98)");
                $(".mask").css("background","rgba(216, 180, 180, 0.3)");
                break;
            case 'blue':
                $(".welcome_part").css({"background":"url(./images/pic04.jpg) no-repeat","background-size":"100% 100%"});
                $(".sidebar").css("background","rgb(85, 115, 115)");
                $(".mask").css("background","rgba(108,148,148,0.3)");
                break;
            case 'gray':
                $(".welcome_part").css({"background":"url(./images/pic05.jpg) no-repeat","background-size":"100% 100%"});
                $(".sidebar").css("background","rgb(37, 37, 37)");
                $(".mask").css("background","rgba(0, 0, 0, 0.3)");
                break;
        }
    });

    // 隐藏style选择框
    $("a.switcher").click(function(){
        var ml = $(".custumize_style").css("margin-left");
        if(ml == '0px'){
            $(".custumize_style").animate({marginLeft:"-200px"});
        }else{
            $(".custumize_style").animate({marginLeft:"0px"}); 
        }
    });

})(jQuery) 