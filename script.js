
	"use strict"; // Start of use strict

	var $path1 = $("#header").offset().top,
		$path2 = $("#parallax_section").offset().top,
		$path3 = $("#portfolio").offset().top,
		$navH = $(".navbar").innerHeight(),
		animationHeading = document.getElementsByClassName('animation-heading'),
		navItem = document.getElementsByClassName('nav-item'),
		spanToggler = document.getElementById("span-toggler"),
		buttonToggler = document.getElementById("button-toggler");

	buttonToggler.addEventListener("click", function () {
		spanToggler.classList.toggle('ion-chevron-up');
	})

	function addNumber() {
		var labelAdd = document.querySelector('#labelAdd'),
			fieldAddition = document.querySelector('.form').fieldAddition,
			num1 = Math.floor(Math.random() * 10),
			num2 = Math.floor(Math.random() * 10);

		labelAdd.innerHTML = num1 + " + " + num2;

		fieldAddition.onkeyup = function (e) {
			if (parseInt(fieldAddition.value) === num1 + num2 && parseInt(fieldAddition.value) != null) {
				isOkAdd = true;

			} else {
				isOkAdd = false;
			}
		}
	}
	addNumber();

	function scrollNavItem() {
		var yScrollAxis = Math.floor(window.pageYOffset);
		for (var i = 0; i < animationHeading.length; i++) {

			if (yScrollAxis > animationHeading[i].offsetTop) {
				animationHeading[i].className = "animation";
			}
		}
		if (yScrollAxis + $navH >= $path1 && yScrollAxis < $path2) {
			$("#link1").addClass("selected");
			$("#link1").siblings().removeClass("selected");
		}
		if (yScrollAxis + $navH >= $path2 - $navH && yScrollAxis < $path3) {
			$("#link2").addClass("selected");
			$("#link2").siblings().removeClass("selected");
		}
		if (yScrollAxis + $navH >= $path3 - $navH) {
			$("#link3").addClass("selected");
			$("#link3").siblings().removeClass("selected");
		}
	}
	scrollNavItem();
	window.onscroll = function () {
		scrollNavItem();
	}

	$("#link1").on("click", function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");
		$("html").animate({
			scrollTop: $path1 - $navH
		}, 1000)
	})
	$("#link2").on("click", function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");

		$("html").animate({
			scrollTop: $path2 - $navH
		}, 1000)
	})
	$("#link3").on("click", function () {
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected");

		$("html").animate({
			scrollTop: $path3 - $navH
		}, 1000)
	})

	function scrollHeader() {
		var $arrow = $("#arrow"),
			$off = $("main").offset().top;
		$("#arrow").on("click", function () {
			$("html").animate({
				scrollTop: $off - $navH
			}, 1000)
		})
	}
	scrollHeader();

