

//Document is loaded
$(document).ready(function(){
	//HTML Basics click to start course
	$('.html-basics').mouseover(function() {
		$('.html-basics').find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("Learn basic knowledge of the foundational web language.");
		});
	}).mouseout(function() {
		$(this).find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("HTML Basics");
		});
    });
	//HTML Intermediate click to start course
    $('.html-intermediate').mouseover(function() {
		$('.html-intermediate').find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("Take your basic HTML to the next level with the HTML intermediate guide.");
		});
	}).mouseout(function() {
		$(this).find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("HTML Intermediate");
		});
    });
	//CSS Basics click to start course
    $('.css-basics').mouseover(function() {
		$('.css-basics').find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("Take control of you HTML with this basic CSS course.");
		});
	}).mouseout(function() {
		$(this).find('p').fadeOut(200, function(){
			$(this).fadeIn(200).html("CSS Basics");
		});
    });

	//Start Welcome and course recommendation sliding text
	slideText();

});
//Welcome text and recommendations for courses animated sliding text
function slideText(){
     $('.text-slide').css({"left":"1500px"}).animate({"left":"0px"}, 1500, function(){
     	$('.text-slide').delay(5000).animate({"left":"-1500px"}, 1500, function(){
     		$('.text-slide').find('h2').html("Are you just starting out?<br> Try our HTML Basics course.");
     		$('.text-slide').find('h4').text("Start from where most web developers started.");
     		$('.text-slide').css({"left":"1500px"}).animate({"left":"0px"}, 1500, function(){
     			$('.text-slide').delay(5000).animate({"left":"-1500px"}, 1500, function(){
     				$('.text-slide').find('h2').html("Need something more advanced?<br>Check out the CSS Intermediate course.");
     				$('.text-slide').find('h4').text("Learn advanced techniques for styling your CSS.");
     				$('.text-slide').css({"left":"1500px"}).animate({"left":"0px"}, 1500, function(){
     					$('.text-slide').delay(5000).animate({"left":"-1500px"}, 1500, function(){
		     				$('.text-slide').find('h2').html("Welcome to Code Odyssey!<br>Where your web-development journey begins.");
		     				$('.text-slide').find('h4').text("Code Odyssey makes learning web-development easy and fun, through step by step tutorials.");
		     				$('.text-slide').css({"left":"1500px"}).animate({"left":"0px"}, 1500, slideText());
		     			});
     				});
     			});
     			
     		});
     	});
     });
}