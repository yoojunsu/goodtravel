$(function(){
	$(".intro-icon-wrap").animate({
		top: "50%"
	},1000,function() {
		$(".tooltip").animate({
			opacity: 1
		},1000);
	});
	
	/****************************
	 *** 카드 클릭시 클론 이미지 등장.
	 ****************************/
	
	/****************************
	 *** 해상도 800px미만일때 카드 이벤트 제거
	 ****************************/		
	$(window).on("resize",function(){
		if($(this).width() <= 800) {
			console.log("ok");
			$(".section1-item").off("click");
		} else {
			$(".section1-item").on("click",cardGallery);
		}
	}).trigger("resize");
	
	function cardGallery(){
		var top = (window.innerHeight - -400) / 2;
		var left = (window.innerWidth - 350) / 2;
		var origPos = $(this).position();
		
		$(this).clone().appendTo("body").css({
			position: "absolute",
			left: origPos.left + "px",
			top: origPos.top + "px",
			zIndex: "10"
		}).animate({
			left: left,
			top: top
		},{
			duration: 700,
			progress: function(promise, progress, remainingMs) {
				progress *= 10;
				$(this).css("transform", function(){
					var transformScale = "scale(" + ((progress / 16) * 2) + ")";
					transformScale += "rotateX(" + ((progress / 10) * 360) + "deg)";
					transformScale += "rotateY(" + ((progress / 10) * 360) + "deg)";
					return transformScale;
				});
			}
		}).click(function(){ /** 클론이미지 클릭시 삭제 **/
			$(this).animate({
				top: -(window.innerHeight + 300)
			}, 400, function(){
				$(this).remove();
				$("body").removeClass("layer");
			});	
		});
		$("body").addClass("layer");		
	}
	/****************************
	 *** 마지막 카드 페이드 슬라이드.
	 ****************************/
	var imgBox = document.querySelector("#imgbox");
	setInterval(imgChanger,1500);
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
	 *** 폼 처리.
	 ****************************/
	var sendBtn = document.querySelector("#send-btn");
	var nameInput = document.querySelector("#name");	
	var emailInput = document.querySelector("#email");	
	var destinationInput = document.querySelector("#destination");	
	var formTextarea = document.querySelector(".message-search-wrap > textarea");	
	var agreeChkBox = document.querySelector("#agree-check");
	sendBtn.addEventListener("click",function(){
		var agreeChkBoxCheck = agreeChkBox.checked;
		if(!nameInput.value) {
			alert("개인정보(Name)을 입력해주세요.");
			return false;
		} else if(!emailInput.value) {
			alert("개인정보(E-mail)을 입력해주세요.");
			return false;
		} else if(!destinationInput.value) {
			alert("컨설팅을 위한 목적지(Destination)를 입력해주세요.");
			return false;
		} else if(!formTextarea.value) {
			alert("보내실 메세지를 입력해주세요.");
			return false;
		} else if(!agreeChkBoxCheck) {
			alert("이용약관을 확인 후 동의해 주세요.");
			return false;
		}
		//이메일 유효성
		var emailRegexp = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		var emailVal = $("#email").val();
		var valid = true;
		if(valid && !emailVal.match(emailRegexp)) {
			alert("올바른 E-mail 형식이 아닙니다.");
			valide = flase;
			return valid;
		}		
		$("#send-btn").next().stop().slideDown(function(){
			var gage = 100;
			$(".wating-bar > span").stop().animate({
				width: gage + "%"
			},1500,function(){
				sendBtn.value = "thanks! " + nameInput.value + ", message sent!";
				$(".required").prop("readonly","readonly").css({
					background: "#eaeaea"
				});
				$(".form-label").css({
					background: "#eaeaea"
				});
			});
		});
	});		
});
