// JavaScript Document
	
	
$(document).ready(function(){
				  
				  
	$('.nav').click(function(){
		var targ = $(this).next('.panel');
		if (targ.css('display') === "none") {
			targ.fadeIn(1000);
			} else if (targ.css('display') === "block") {
				targ.fadeOut(1000);	   
			};
		$(this).find('.dropC').toggleClass('glitch')
	});
	
	$('.prose').click(function(){
		$(this).find('.textP').toggle();
	});
	
	$('.poetry').click(function(){
		$(this).find('.textP').toggle();
	});
	
	$('a').mouseenter(function(){
		var text = $(this).html();
		console.log(text);
		$(this).addClass('glitch').attr('data-text', text);
	});
	
	$('a').mouseleave(function(){
		$(this).removeClass('glitch');
	});
		
	
// number of drops created.
var nbDrop = 858; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600),
		dropTop = randRange(-1000,1400),
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
	
	$('#pause').click(function() {
		$('.drop').toggleClass('paused');
		$(this).toggleClass('go');
});
	
	
	
});


