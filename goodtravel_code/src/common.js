$(function(){
	/****************************
	 *** IE 접속 불가 코드
	 ****************************/ 
	var agent = navigator.userAgent.toLowerCase();
	if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ) {
	 location.href = "/noie.html";
	}
	else {
	  console.log("it's not IE");
	}
		
	/****************************
	 *** 예약 메뉴 마우스 오버시 페이드인 
	 ****************************/ 
	$("#nav-booking").on("mouseover",function(){
		$(".sub-nav").fadeIn(200);
	}).on("mouseleave",function(){
		$(".sub-nav").fadeOut(200);
	});
	
	/****************************
	 *** 저해상도 nav창 처리
	 ****************************/ 
	$(".row-resolution-nav-hamburger").on("click",function(){
		$(this).fadeOut(function(){
			$(".row-resolution-nav-wrap").fadeIn();
		});
	});
	
	$(".close-wrap").on("click",function(){
		$(".row-resolution-nav-wrap").fadeOut(function(){
			$(".row-resolution-nav-hamburger").fadeIn();
		});
	});

	$("#search-keyword").focus(function(){
		$(this).prop("value"," ");
	});
});	
