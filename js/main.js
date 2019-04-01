$(document).ready(function(){
	var pull = $('#navigation-toggle');
	var menu = $('.nav ul');
	$(pull).on("click", function(e){
	    e.preventDefault();
	    menu.slideToggle();
	    $(this).toggleClass('nav__toggle-button--active');
	    
	});
	$(window).resize(function(){
	    var w = $(window).width();
	    if(w > 992) {
	        menu.removeAttr('style');
	        pull.removeClass('nav__toggle-button--active');
	    } else {

	    }
	});
	var w = $(window).width();
	 if(w < 992) {
	 	$('.nav a').on('click',function(){
	 		  menu.slideToggle();
	 	});
	 }
	$('nav.nav a').on("click", function(){
		fnstart();
	});
	function fnstart(){	
		if ( $("#navigation-toggle").hasClass("nav__toggle-button--active")  ) {
   			pull.toggleClass('nav__toggle-button--active');
			menu.slideToggle();
		}
	};

	$("#owl-example").owlCarousel({
		singleItem: true,
		navigation: true,
		theme: 'my-theme',
		navigationText: ['','']
	});
	$(".nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:".nav a"
	});
});