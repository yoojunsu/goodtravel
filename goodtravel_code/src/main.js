$(function(){	
	/****************************
	 *** 메인 페이드 슬라이드 
	 ****************************/
	var slideClass = "slide-applay";
	var slideWrap = document.querySelector(".main-slide");
	var slideBtnWrap = document.querySelector(".main-slide-btn-wrap");
	var slideBtn = document.querySelector(".slide-btn");
	var slideBtnOnClass= "slide-btn-on";
	
	var slideTimer = setInterval(fadeSlide, 5000);
	slideBtnWrap.addEventListener("mouseover",function(){
		clearInterval(slideTimer);
	});
	slideBtnWrap.addEventListener("mouseout",function(){
		slideTimer = setInterval(fadeSlide, 5000);
	});
	
	function fadeSlide() {
		var curSlide = document.querySelector("." + slideClass);
		var nextSlide = curSlide.nextElementSibling;
		var curSlideBtn = document.querySelector("." + slideBtnOnClass);
		var nextSlideBtn = curSlideBtn.nextElementSibling;
		curSlide.classList.remove(slideClass);
		curSlideBtn.classList.remove(slideBtnOnClass);
		if(!nextSlide) {
			nextSlide = document.querySelector(".slide-content:first-child");
			nextSlideBtn = document.querySelector(".slide-btn:first-child");
		}
		nextSlide.classList.add(slideClass);
		nextSlideBtn.classList.add(slideBtnOnClass);
	}
	
	$(".slide-btn").on("click",function(){
		$(this).addClass("slide-btn-on");
		$(".slide-btn").not($(this)).removeClass("slide-btn-on");
		switch($(this).index()) {
			case 0 :
				$(".slide-content").eq(0).addClass("slide-applay");
				$(".slide-content").not($(".slide-content").eq(0)).removeClass("slide-applay");
				break;
			case 1 :
				$(".slide-content").eq(1).addClass("slide-applay");
				$(".slide-content").not($(".slide-content").eq(1)).removeClass("slide-applay");
				break;
			case 2 :
				$(".slide-content").eq(2).addClass("slide-applay");
				$(".slide-content").not($(".slide-content").eq(2)).removeClass("slide-applay");
				break;
		}
	});

	/****************************
	 *** 섹션3 갤러리 텍스트 박스 페이드 
	 ****************************/
	var $sec4ContentLastChild = $(this).children(":last");
	$(".section4-content").on("mouseover",function(){
		$(this).children(":last").addClass("section4-text-box-fade");
	}).on("mouseout",function(){
		$(this).children(":last").removeClass("section4-text-box-fade");
	});
	
	/****************************
	 *** 마우스 스크롤 이펙트 함수 및 적용
	 ****************************/
	scrollEffect(".section4-content", "content-appear", ".section4-content-wrap");
	scrollEffect(".section6-content", "content-appear", ".section5-booking-img-wrap ");
	
	function scrollEffect(target, addClass, subTarget) {
		var target2 = target || subTarget;
		var targetTop = $(target2).position().top;
		var vh;
		
		$(window).on("resize",function(){
			vh = innerHeight;
		}).trigger("resize");
		$(window).on("scroll",function(){
			var scrY = window.scrollY;
			if(targetTop - (vh / 2) <= scrY && !$(target).hasClass(addClass)) {
				$(target).addClass(addClass);
			}
		});
	}
});	