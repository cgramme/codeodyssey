var currentItem = 1, $titleString;

$(window).ready(function(){
	showText("#msg", "<Code Odessey/>", 0, 100); 
});
$(document).ready(function(){

	$('.menu .courses').mouseenter(function(){
		$('.sub-menu').slideDown(200);
	});

	$('.menu').mouseleave(function(){
		$('.sub-menu').slideUp(200);
	});

	$('.css-basics').on("click", function(){
    		var scroll = $(window).width();
	});



	//HTML Basics click to start course
    $('.html-basics').mouseover(function() {
		$('.html-basics').find('p').transition({
			  perspective: '500px',
			  rotateY: '-90deg',
			  rotateX: '-90deg'
			},200, function(){
				$('.html-basics').find('p').html("Learn the basic principles of the foundational web language HTML.");
				$('.html-basics').find('p').transition({
			 		 perspective: '500px',
			  		 rotateY: '0deg',
			  		 rotateX: '0deg'
				},200);
			}
		);
	}).mouseout(function() {
		$('.html-basics').find('p').html("HTML Basics");
    });
	//HTML Intermediate click to start course
    $('.html-intermediate').mouseover(function() {
		$('.html-intermediate').find('p').transition({
			  perspective: '500px',
			  rotateY: '-90deg',
			  rotateX: '-90deg'
			},200, function(){
				$('.html-intermediate').find('p').html("Take your basic knowledge of HTML to the next level with this HTML intermediate guide.");
				$('.html-intermediate').find('p').transition({
			 		 perspective: '500px',
			  		 rotateY: '0deg',
			  		 rotateX: '0deg'
				},200);
			}
		);
	}).mouseout(function() {
		$('.html-intermediate').find('p').html("HTML Intermediate");
    });
	//CSS Basics click to start course
	$('.css-basics').mouseover(function() {
		$('.css-basics').find('p').transition({
			  perspective: '500px',
			  rotateY: '-90deg',
			  rotateX: '-90deg'
			},200, function(){
				$('.css-basics').find('p').html("Add style to your HTML with this CSS basics course.");
				$('.css-basics').find('p').transition({
			 		 perspective: '500px',
			  		 rotateY: '0deg',
			  		 rotateX: '0deg'
				},200);
			}
		);
	}).mouseout(function() {
		$('.css-basics').find('p').html("CSS Basics");
    });

    $('.css-intermediate').mouseover(function() {
		buttonAnimate("Take your CSS to the next level! Coming soon!", this);
	}).mouseout(function() {
		$('.css-intermediate').find('p').html("CSS Intermediate");
    });

    $('.javascript-basics').mouseover(function() {
		buttonAnimate("Take even more control of your site with Javascript Basics! Comming soon!", this);
	}).mouseout(function() {
		$('.javascript-basics').find('p').html("Javascript Basics");
    });

    $('.sass-basics').mouseover(function() {
		buttonAnimate("Syntactically awesome stylesheets, your css on steriods! Comming soon!", this);
	}).mouseout(function() {
		$('.sass-basics').find('p').html("Sass Basics");
    });

	//Start Welcome and course recommendation sliding text.
	slideText(5000);
	//Title text in animation. Display one character at a time.
	//showText("#msg", "<Code Odessey/>", 0, 100); 


});



function buttonAnimate($string1, $paramObject){
	$($paramObject).find('p').transition({
			  perspective: '500px',
			  rotateY: '-90deg',
			  rotateX: '-90deg'
			},200, function(){
				$($paramObject).find('p').html($string1);
				$($paramObject).find('p').transition({
			 		 perspective: '500px',
			  		 rotateY: '0deg',
			  		 rotateX: '0deg'
				},200);
			}
		);
}


//Welcome text and recommendations for courses animated sliding text
function slideText($time){
	var i = 1;
	setInterval(function(){ 
		var listLength = $('.text-slide li').length;
		if($('.text-slide span').length != 0){
			$('.text-slide span').remove();
		}
		$('.text-slide li:nth-child('+i+')').css({"display":"block"}).addClass('translate-x-in').delay($time).queue(function(next){
						$(this).css({"display":"none"});
						next();
					});
		if(i>=listLength){
			i=1;
		}else{
			i++;
		}
		
	}, $time);
}

function showText (target, message, index, interval) {   
  if(index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
        showText(target, message, index, interval); 
    }, interval);
  }
}
