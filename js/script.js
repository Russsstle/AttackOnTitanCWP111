$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
});
setTimeout("$('.navbar').css('visibility','visible').hide().fadeIn('slow');",500);