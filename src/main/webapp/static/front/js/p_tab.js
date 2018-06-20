// JavaScript Document


$(function(){
//����ҳ�����ӵ���
	var subNav_active = $(".adv_active");
	var subNav_scroll = function(target){
		subNav_active.removeClass	("adv_active");
		target.parent().addClass("adv_active");
		subNav_active = target.parent();
	};
	$("#subNav a").click(function(){
		subNav_scroll($(this));
		var target = $(this).attr("href");
		var targetScroll = $(target).offset().top - 80;
		$("html,body").animate({scrollTop:targetScroll},300);
		return false;
	});
	//ҳ����תʱ��λ
	if(window.location.hash){
		var targetScroll = $(window.location.hash).offset().top - 80;
		$("html,body").animate({scrollTop:targetScroll},300);
	}
	$(window).scroll(function(){
		var jqthis = $(this);
		var targetTop = $(this).scrollTop();
		var footerTop = $("#footer").offset().top;
		var height = $(window).height();
		
		if (targetTop >= 520){
			$("#subNav").addClass("fixedSubNav");
			$(".empty-placeholder").removeClass("hidden");
		}else{
			$("#subNav").removeClass("fixedSubNav");
			$(".empty-placeholder").addClass("hidden");
		}
		if(targetTop < 750){
			subNav_scroll($(".adv_door"));
		}else if(targetTop > 1200 && targetTop < 1640){
				subNav_scroll($(".adv_source"));
		}else if(targetTop > 2314 && targetTop < 2734){
				subNav_scroll($(".adv_price"));
		}else if(targetTop > 2968 && targetTop < 3268){
				subNav_scroll($(".adv_transfer"));
		}else if(targetTop > 3327 && targetTop < 3627){
				subNav_scroll($(".adv_payment"));
		}else if(targetTop > 3651 && targetTop < 4071){
				subNav_scroll($(".adv_promise"));
		}else if(targetTop > 4163 && targetTop < 4473){
				subNav_scroll($(".adv_ride"));
		}else if(targetTop > 4580){
			subNav_scroll($(".adv_finance"));
		}
	})
	
}());