
$(window).load(function(){
	showText("#msg", "<Code Odessey/>", 0, 100);
});
$(document).ready(function(){
	$('.menu .courses').mouseenter(function(){
		listOut($('.menu li'), 0, 50);
		listIn($('.sub-menu li'), 0, 50);
	});
	$('.sub-menu').mouseleave(function(){
		listIn($('.menu li'), 0, 50);
		listOut($('.sub-menu li'), 0, 50);
	});
	$('.menu-button').on('click', function(){
		$('.menu').slideToggle(200);
	});
	//Course buttons below
    $('.html-basics').mouseover(function() {
		buttonAnimate("Learn the basic principles of the foundational web language HTML.", this);
	}).mouseout(function() {
		buttonAnimate("HTML Basics", this);
    });
    $('.html-intermediate').mouseover(function() {
		buttonAnimate("Take your basic knowledge of HTML to the next level with this HTML intermediate guide. Coming soon!", this);
	}).mouseout(function() {
		buttonAnimate("HTML Intermediate", this);
    });
	$('.css-basics').mouseover(function() {
		buttonAnimate("Add style to your HTML with this CSS basics course. Coming soon!", this);
	}).mouseout(function() {
		buttonAnimate("CSS Basics", this);
    });
    $('.css-intermediate').mouseover(function() {
		buttonAnimate("Take your CSS to the next level! Coming soon!", this);
	}).mouseout(function() {
		buttonAnimate("CSS Intermediate", this);
    });
    $('.javascript-basics').mouseover(function() {
		buttonAnimate("Take even more control of your site with Javascript Basics! Comming soon!", this);
	}).mouseout(function() {
		buttonAnimate("Javascript Basics", this);
    });
    $('.sass-basics').mouseover(function() {
		buttonAnimate("Syntactically awesome stylesheets, your css on steriods! Comming soon!", this);
	}).mouseout(function() {
		buttonAnimate("Sass Basics", this);
    });
	//Start Welcome message and course recommendation sliding text
	slideText(5000);
});
//course transition animation
//string1 sets text to be displayed after animation
//paramObject should be set to "this"
function buttonAnimate(string1, paramObject){
	$(paramObject).find('p').transition({
			  perspective: '500px',
			  rotateY: '-90deg',
			  rotateX: '-90deg'
			},200, function(){
				$(paramObject).find('p').html(string1);
				$(paramObject).find('p').transition({
			 		 perspective: '500px',
			  		 rotateY: '0deg',
			  		 rotateX: '0deg'
				},200);
			}
		);
}
//Welcome text and recommendations for courses animated sliding text
//time variable sets pause between each message
function slideText(time){
	var i = 1;
	setInterval(function(){ 
		var listLength = $('.text-slide li').length;
		if($('.text-slide span').length != 0){
			$('.text-slide span').remove();
		}
		$('.text-slide li:nth-child('+i+')').css({"display":"block"}).addClass('translate-x-in').delay(time).queue(function(next){
						$(this).css({"display":"none"});
						next();
					});
		if(i>=listLength){
			i=1;
		}else{
			i++;
		}	
	}, time);
}
//display one string text character at a time
//target is the element to be filled with text
//message is the string to be displayed one character at a time
//index should be set to 0
//interval is the time in milliseconds between each character dispalyed
function showText (target, message, index, interval) {   
  if(index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
        showText(target, message, index, interval); 
    }, interval);
  }
}
function listOut (list, index, interval) {
	if(index < list.length) {
    $(list[index++]).css({"top":"100px"});
    setTimeout(function () {
        listOut(list, index, interval); 
    }, interval);
  }
}
function listIn (list, index, interval) {
	if(index < list.length) {
    $(list[index++]).css({"top":"0px"});
    setTimeout(function () {
        listIn(list, index, interval);
    }, interval);
  }
}
