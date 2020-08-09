$(function(){
	/****************************
	 *** 화면로딩시 컨텐츠 페이드
	 ****************************/
	var fadeTime = 400;
	$(".greece-box").animate({
		opacity: 1
	},fadeTime,function(){
		$(".turkey-box").animate({
			opacity: 1
		},fadeTime,function(){
			$(".croatia-box").animate({
				opacity: 1	
			},fadeTime,function(){
				$(".india-box").animate({
					opacity: 1
				},fadeTime,function(){
					$(".france-box").animate({
						opacity: 1
					},fadeTime,function(){
						$(".egypt-box").animate({
							opacity: 1
						},fadeTime);
					});
				});
			});
		});
	});
	
	/****************************
	 *** 콤보 박스 처리  
	 ****************************/
	$(".combo-box").on("click",function(){
		$(".combo-list").stop().fadeToggle(100);
	});
	
	
	/** 콤보박스 active 처리 **/
	$(".combo-list > li").on("click",function(){
		$(this).addClass("combo-list-active");
		$(".combo-list > li").not($(this)).removeClass("combo-list-active");
		$(".combo-choice").text($(this).text());
		var comboContent = [$(".combo-continents-wrap"),$(".combo-regions-wrap"),$(".combo-contries-wrap"),$(".combo-cities-wrap")];
		var comboListIndex = $(this).index();
		$(".combo-area").css("display","none");
		comboContent[comboListIndex].fadeIn();;
	});
	
	
	/** 콤보박스 컨텐츠 처리 **/
	$(".list-link").on("mouseover",function(){
		$(this).children().children("p").addClass("destinations-list-text-fade");
	}).on("mouseleave",function(){
		$(this).children().children("p").removeClass("destinations-list-text-fade");
	});
	
	$(".combo-item-list > li").on("mouseover",function(){
		$(this).children(":last").addClass("combo-item-text-active");
	}).on("mouseout",function(){
		$(this).children(":last").removeClass("combo-item-text-active");
	});
	
});
