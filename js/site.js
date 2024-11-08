"use strict";

$(document).ready(function () {

	// Disable right-click context menu
    $(document).on("contextmenu", function (e) {
        e.preventDefault();
    });

    // Disable F12 key (Inspect Element)
    $(document).on("keydown", function (e) {
        if (e.keyCode === 123) { // F12 key code
            return false;
        }
    });

    // Disable Ctrl+Shift+I (Chrome DevTools)
    $(document).on("keydown", function (e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 73) { // Ctrl+Shift+I
            return false;
        }
    });

    // Disable Ctrl+Shift+J (Console)
    $(document).on("keydown", function (e) {
        if (e.ctrlKey && e.shiftKey && e.keyCode === 74) { // Ctrl+Shift+J
            return false;
        }
    });

    // Disable Ctrl+U (View Source)
    $(document).on("keydown", function (e) {
        if (e.ctrlKey && e.keyCode === 85) { // Ctrl+U
            return false;
        }
    });
	
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});


