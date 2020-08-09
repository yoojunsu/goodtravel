$(function(){
	$(".item-inner").on("click",function(){
		$(this).toggleClass("card-active");
	});
	/****************************
	 *** 카드 이미지 체인져 js
	 ****************************/
	var imgBox = document.querySelector("#changebox");
	var fadeTimer = setInterval(imgChanger, 1500);	
	function imgChanger() {
		var imgLastChild = imgBox.lastElementChild;
		var imgClone = imgLastChild.cloneNode(true);
		imgBox.insertBefore(imgClone, imgBox.firstElementChild);
		imgLastChild.style.opacity = "0";
		
		window.setTimeout(function(){
			imgBox.removeChild(imgLastChild);
		},500);
	}
	/****************************
	 *** 마지막카드 슬라이드 
	 ****************************/
	var slideTimer = setInterval(slider,2000);
	$(".item-slide-wrap").on("mouseover",function(){
		clearInterval(slideTimer);
	}).on("mouseout",function(){
		slideTimer = setInterval(slider,2000);
	});
	$(".slide-btn").on("click",slider);	
	var isBusy = false;
	function slider(e) {
		if(isBusy) return;
		isBusy = true;
		var operator = "-=";
		var isPrev = $(this).index() === 1 ? true : false;
		var slideItemWidth = $(".item-slide > a").width();
		if(e) {
			isPrev = $(this).index() === 1 ? true : false;
		} else {
			isPrev = false; 
		}
		
		if(isPrev) {
			operator = "+=";
			$(".item-slide").prepend($(".item-slide").children(":last")).css({
				left: "-" + slideItemWidth + "px"
			});
		}
		
		$(".item-slide").animate({
			left: operator + slideItemWidth
		},function(){
			if(!isPrev) {
				$(this).append($(this).children(":first")).css({left: "0"});
			}
			isBusy = false;
		});
	}
});
