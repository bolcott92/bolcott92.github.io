// JavaScript Document
	
	
$(document).ready(function(){
		"use strict";		  
				  
	$('.nav').click(function(){
		
		
		var targ = $(this).next('.panel');
		if (targ.css('display') === "none") {
			targ.fadeIn(500);
			} else if (targ.css('display') === "block") {
				targ.fadeOut(500);	   
			}
	});
	
	$('.prose h1, .poetry h1').click(function(){
		
		var targ = $(this).siblings('.textP');
		var others = $(this).parent().siblings('section');
		if (targ.css('display') === "none") {
			targ.fadeIn(500);
			others.fadeOut(500);
			} else if (targ.css('display') === "block") {
				targ.fadeOut(500);
				others.fadeIn(500);
			}
	});
	
	
	window.onscroll = function() {scrollFunction();};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $(".bk-btn-2").fadeIn(500);
    } else {
        $(".bk-btn-2").css('display',"none");
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}	
	
$('.bk-btn-2').click(function() {
	topFunction();
});
	
	
	
	
	
// number of drops created.
var nbDrop = 458;

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}
	

// function to generate drops
function createRain() {
	var i = 1;
	
	for( i=1;i<nbDrop;i++) {
	
		var h = $(document).height(),
		w = $(document).width(),
		dropLeft = randRange(0,w),
		dropTop = randRange(-1000,h),
		rC = randRange(0,255),
		gC = randRange(0,255),
		bC = randRange(0,255);
		
		
	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	
	$('#drop'+i).css('background', "-webkit-gradient(linear,0% 0%,0% 100%, from(rgba("+rC+","+gC+","+bC+",1) ), to(rgba(255,255,255,0.6)");	
	
	$('#drop'+i).css('background',"-moz-linear-gradient(top, rgba(255,255,255,0.6) 0%, rgba("+rC+","+gC+","+bC+",1) 100%");
	
	}
}

	createRain();
	
$(".play-button").click(function() {
  $(this).toggleClass("paused");
	$('.drop').toggleClass('pausedFX');
	
});
	
	/*
	
	$('.speaker').click(function(e) {
  e.preventDefault();

	$(this).toggleClass('mute');
		
		if ($(this).hasClass('mute')){
		
		$('audio').trigger("pause");
		
	} else {
		$('audio').trigger("play");
	}
});
*/

	
	$('.pLink').click(function() {
		$('.homeC').css('display', 'none');
		$('.poetryContent, .goB').fadeIn(500);
	});
	
	$('.fLink').click(function() {
		$('.homeC').css('display', 'none');
		$('.fictionContent, .goB').fadeIn(500);
	});
	
	$('.cLink').click(function() {
		$('.homeC').css('display', 'none');
		$('.criticismContent, .goB').fadeIn(500);
	});
	
	$('.dLink').click(function() {
		$('.homeC').css('display', 'none');
		$('.designContent, .goB').fadeIn(500);
	});
	
	$('.goB').click(function() {
		$("[class*='Content'], .goB").css('display', 'none');
		$('.homeC').fadeIn(500);
	});
	
	
	
});


