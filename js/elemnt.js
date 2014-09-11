/**NAVBAR TOGGLE**/  


$(function() {
$('.nav a').on('click', function(){ 
if($('.navbar-toggle').css('display') !='none'){
$(".navbar-toggle").trigger( "click" );
}
});
});


/**
* This part causes smooth scrolling using scrollto.js
* We target all a tags inside the nav, and apply the scrollto.js to it.
*/
$("a").click(function(evn){
evn.preventDefault();
$('html,body').scrollTo(this.hash, this.hash); 
});



/*!
* jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
* Scroll smooth to any element in your DOM.
*
* Copyright (c) 2012 Yannick Albert (http://yckart.com)
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
* 2013/02/17
**/

/**
$.scrollTo = $.fn.scrollTo = function(x, y, options){
if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

options = $.extend({}, {
gap: {
x: 0,
y: 0
},
animation: {
easing: 'easeOutQuart',
duration: 1000,
complete: $.noop,
step: $.noop
}
}, options);

return this.each(function(){
var elem = $(this);
elem.stop().animate({
scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
}, options.animation);
});
};
**/