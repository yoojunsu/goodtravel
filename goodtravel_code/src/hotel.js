$(function(){
	/****************************
	 *** 화면로딩시 컨텐츠 페이드
	 ****************************/
	$(".corona-guide-wrap").on("click",function(){
		$(this).toggleClass("corona-guide-open");
	});
	
	$(".corona-guide > a").on("click",function(e){
		e.stopPropagation();
	});
	
	/****************************
	 *** 호텔 슬라이드
	 ****************************/
	var isBusy = false;
	/********** 1번째 슬라이드 시작 **********/
	var sliderTimer1 = setInterval(slider1, 1500);
	$(".section2-slide-wrap").on("mouseover",function(){
		clearInterval(sliderTimer1);
	}).on("mouseout",function(){
		sliderTimer1 = setInterval(slider1, 1500);
	});
	$(".slide1-btn").on("click",slider1);
	/**1번째 슬라이드 함수 **/
	function slider1(e) {
		if(isBusy) return;
		isBusy = true;
		var isPrev = $(this).index() === 1 ? true : false;
		var operator = "-=";
		var slideTargetWidth = $(".section2-slide figure > img").width();
		if(e) {
			isPrev = $(this).index() === 1 ? true : false;
		} else {
			isPrev = false;
		}
		if(isPrev) {
			operator = "+=";
			$(".section2-slide").prepend($(".section2-slide").children(":last")).css({
				left: "-" + slideTargetWidth + "px"
			});
		}
		
		$(".section2-slide").animate({
			left : operator + slideTargetWidth
		},function(e){
			if(!isPrev) {
				$(this).append($(this).children(":first")).css({left: "0"});
			}
			isBusy = false;
		});
	}
	
	/********** 2번째 슬라이드 시작 **********/
	var sliderTimer2 = setInterval(slider2, 2500);
	$(".section3-slide-wrap").on("mouseover",function(){
		clearInterval(sliderTimer2);
	}).on("mouseout",function(){
		sliderTimer2 = setInterval(slider2, 2500);
	});
	$(".slide2-btn").on("click",slider2);
	/**2번째 슬라이드 함수**/
	function slider2(e) {
		if(isBusy) return;
		isBusy = true;
		var isPrev = $(this).index() === 1 ? true : false;
		var operator = "-=";
		var contentWidth = $(".section3-slide > a").width();
		if(e) {
			isPrev = $(this).index() === 1 ? true : false;
		} else {
			isPrev = false;
		}
		if(isPrev) {
			operator = "+=";
			$(".section3-slide").prepend($(".section3-slide").children(":last")).css({left: "-360px"});
		}
		
		$(".section3-slide").animate({
			left : operator + "360"
		},function(e){
			if(!isPrev) {
				$(this).append($(this).children(":first")).css({left: "0"});
			}
			isBusy = false;
		});
	}
});
