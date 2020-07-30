$(document).ready(function(){
	var isTouchDevice =
    (('ontouchstart' in window) ||
    (navigator.MaxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
			if(!isTouchDevice){
	    console.log("lagi di non-touch");
			AOS.init({disable: 'mobile'});
			}else{
	     console.log("lagi di touch");
			 AOS.init({
  		 	disable: function() {
    		var maxWidth = 9000;
    		return window.innerWidth < maxWidth;
  }
});
			}
});
