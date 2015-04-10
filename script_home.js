

//Document is loaded
$(document).ready(function(){

	$('.menu .courses').mouseenter(function(){
		$('.sub-menu').slideDown(200);
	});

	$('.menu').mouseleave(function(){
		$('.sub-menu').slideUp(200);
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
    

	//Start Welcome and course recommendation sliding text
	slideText();

});
//Welcome text and recommendations for courses animated sliding text
function slideText(){
     $('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, function(){
     	$('.text-slide').delay(5000).animate({"left":"-500px"}, 1000, function(){
     		$('.text-slide').html("Are you just starting out?<br> Try our HTML Basics course.");
     		$('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, function(){
     			$('.text-slide').delay(5000).animate({"left":"-500px"}, 1000, function(){
     				$('.text-slide').html("Need something more advanced?<br>Check out the CSS Intermediate course.");
     				$('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, function(){
     					$('.text-slide').delay(5000).animate({"left":"-500px"}, 1000, function(){
		     				$('.text-slide').html("All access granted immediately.<br>Skip ahead, review, or learn only what you want.");
		     				$('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, function(){
		     					$('.text-slide').delay(5000).animate({"left":"-500px"}, 1000, function(){
				     				$('.text-slide').html("All our courses are completely free!<br>Learn at your own pace.");
				     				$('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, function(){
				     					$('.text-slide').delay(5000).animate({"left":"-500px"}, 1000, function(){
					     					$('.text-slide').html("More courses coming soon!<br>Stay tuned in.");
					     					$('.text-slide').css({"left":"500px"}).animate({"left":"0px"}, 1000, slideText());
					     				});
				     				});
				     			});

			     			});
		     			});
     				});
     			});
     			
     		});
     	});
     });
}