$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
});
setTimeout("$('.navbar').css('visibility','visible').hide().fadeIn('slow');",500);

function hasVerticalScroll(node){
  if(node == undefined){
    if(window.innerHeight){
      return document.body.offsetHeight> innerHeight;
    }
    else {
      return  document.documentElement.scrollHeight > 
        document.documentElement.offsetHeight ||
        document.body.scrollHeight>document.body.offsetHeight;
    }
  }
  else {
    return node.scrollHeight> node.offsetHeight;
  }
}