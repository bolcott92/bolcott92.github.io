// JavaScript Document
	
	
$(document).ready(function(){
				  
				  
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
	
	$('h1').each(function(){
		var text = $(this).html();
		$(this).addClass('glitch').attr('data-text', text);
	});
	
	var oflow = window.location.href;
	
	if (oflow.includes('#')) {
		$('html').css('overflow-y', 'auto');
	}	else {
		$('html').css('overflow-y', 'hidden');
	}
		
	
// number of drops created.
var nbDrop = 458; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

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
	}

}

	createRain();
	
$(".play-button").click(function() {
  $(this).toggleClass("paused");
	$('.drop').toggleClass('pausedFX');
	
	
	if ($(this).hasClass('paused')){
		
		$('audio').trigger("pause");
		
	} else {
		$('audio').trigger("play");
	}
	
});
	
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


