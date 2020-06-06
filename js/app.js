'use strict';

$(".slide-container").slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3500,
	pauseOnDotsHover: false,
	fade: true,
});

$(document).ready(()=>{
		$('.by-school').show(500);
		$('.by-school-button').css('opacity', '0.7');
    $('.by-degree').hide();
    $(".by-school-button").click( function(){
        $(".by-school").show(500);
				$(".by-degree").hide(500);
				$('.by-school-button').css('opacity', '0.7');
				$('.by-degree-button').css('opacity', '1');
    })
    
    $(".by-degree-button").click( function(){
        $(".by-degree").show(500);
				$(".by-school").hide(500);
				$('.by-school-button').css('opacity', '1');
				$('.by-degree-button').css('opacity', '0.7');

    })
})
