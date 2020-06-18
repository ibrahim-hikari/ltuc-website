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
		$('.icon').click(function (e) { 
			e.preventDefault();
			$('.menu_nav').toggle(200);
		});
		$(window).on('load', function () {
			var pre_loader = $('.spinner-wrapper');
			pre_loader.fadeOut('slow', function () {
					$(this).remove();
			});
	});
})


const header = document.querySelector('header');
const sectionOne = document.querySelector('.first-section');

const sectionOneOptions = {
  rootMargin: '-500px 0px 0px 0px',
};

    const sectionOneObserver = new IntersectionObserver(function (
      entries,
      sectionOneObserver,
    ) {
			
	entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);