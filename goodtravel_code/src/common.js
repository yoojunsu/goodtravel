$(function() {
	/** 헤더 햄버거 메뉴 클릭시 메뉴 오픈 **/
	$(".hamburger-menu-wrap").on("click",function(){
		$(this).children().eq(0).toggleClass("top-line");
		$(this).children().eq(1).toggleClass("mid-line");
		$(this).children().eq(2).toggleClass("bottom-line");
		$(".header-nav-wrap").stop().fadeToggle(function(){
			$(this).children().toggleClass("nav-active");
		});
	});
	/** 애니메이트 효과 **/
	$(".main-wrap").animate({
		opacity: 1
	},1500,function(){
		$(this).css("transform","scale(1)");
		$(".flying-window").animate({
			opacity: 1,
			top: "50%"
		},700,function(){
			var that = $(this);
			setTimeout(function(){
				$(".flying-window-content").eq(0).addClass("flying-window-content-fadein");
			},200);
			setTimeout(function(){
				$(".flying-window-content").eq(1).addClass("flying-window-content-fadein");
			},500);
			setTimeout(function(){
				$(".flying-window-content").eq(2).addClass("flying-window-content-fadein");
			},800);
			setTimeout(function(){
				$(".flying-window-content").eq(3).addClass("flying-window-content-fadein");
			},1100);
			setTimeout(function(){
				that.addClass("window-animation-add");
			},1700);
			setTimeout(function(){
				typing();
			},2100);			
		});	
	});
		
		/** 타이핑 함수 **/
		var text = "Search Engine Optimization And Advertising.";
		var typingTitle = document.querySelector("#typing-title");
		var i = 0;		
		function typing(){
			if(i < text.length) {
				typingTitle.innerHTML += text[i];
				i++;
			}
			setTimeout(typing, 100);
		}
		
		/**flying-window 이벤트 **/
		var $flyingWindow = $(".flying-window");
		$flyingWindow.on("mouseover",function(){
			$(this).removeClass("window-animation-add");
		}).on("mouseout",function(){
			$(this).addClass("window-animation-add");
		});
		var x = 0;
		var y = 0;
		var moveX = 0;
		var moveY = 0;
		var friction = 1/12;
		
		function windowMove() {
			x += (moveX - x) * friction;
			y += (moveY - y) * friction;
			
			$flyingWindow.css({
				'transform':'translate(-50%, -50%) perspective(500px) rotatey('+ -x +'deg) rotatex('+ y +'deg)' 
			});
			
			window.requestAnimationFrame(windowMove);
		}
		
		$(window).on("mouseover",function(e){
			var mouseX = Math.max(-350, Math.min(100, $(window).width()/2 - e.clientX));
			var mouseY = Math.max(-350, Math.min(100, innerHeight / 2 - e.clientY));
			moveX = (6 * mouseX) / 100;
			moveY = (8 * mouseY) / 100;
		});
		
		windowMove();
});

 
/*****************************************************
 * 쿠키 값을 불러오는 함수
 *****************************************************/
 
function setCookie(name, value, exdays, path) {
	// 오늘 날짜 객체 생성
  var d = new Date();
  // 현재 유닉스 타임에 cookie 유지 시간을 더해 다시 유닉스 타임으로 지정한다.
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  // cookie 유효 시간을 국제 표준시(유니버셜 타임:UTC Time)로 지정한다.
  var expires = "expires="+d.toUTCString();
  // cookie 적용 경로에 대한 처리(인수 값이 없으면 "/"으로 처리)
  path = path || "/";

  // 준비된 값으로 cookie를 최종적으로 저장
	document.cookie = name + "=" + value + "; " + expires + "; path=" + path;
}


/*****************************************************
 * 쿠키를 읽는 함수
 *****************************************************/
function getCookie(name) {
    var name = name + "=";
    var data = document.cookie.split(';');
    for(var i = 0; i < data.length; i++) {
      var item = data[i];
      // 항목의 첫 글자가 공백인 경우에 두 번째 위치부터 끝까지의 값을 item 변수에 대입
      while (item.charAt(0) == ' ') item = item.substring(1);

      // 항목의 내용 중에서 변수 name의 값을 가지는 위치가 0인 경우(즉 처음 위치)
      if (item.indexOf(name) == 0) {
        /* 항목의 내용에서 name의 길이를 substring() 메소드의 시작 위치 인수로
          항목의 전체 길이를 두 번째 인수로 전달해 실제 값을 찾아 반환 */
        return item.substring(name.length, item.length);
      }
    }
    // cookie가 없는 경우
    return "";
}
