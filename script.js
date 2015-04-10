var currentLesson, mainContentWidth, lessonNumber;

$(window).load(function(){
	$(".scroll-pane").jScrollPane({
		showArrows: true
	});
	mainContentWidth = $('.main-content').width();
});

$(document).ready(function(){
	
	

	updateLessonNumber();


	
	
	


});


// AJAX request for loading lessons
function loadXMLDoc(url, elementId){
		$('#change-content').css({ transformOrigin: +mainContentWidth/2+'px 0px' }).transition({
			  perspective: '1000px',
			  rotateX: '-90deg'
			},500);
		var xmlhttp;
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
 			 xmlhttp=new XMLHttpRequest();
 		}else{// code for IE6, IE5
 			 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
 		}
		xmlhttp.onreadystatechange=function(){
  			if (xmlhttp.readyState==4 && xmlhttp.status==200){
    				document.getElementById(elementId).innerHTML=xmlhttp.responseText;
    				updateLessonNumber();
    				$('#change-content').css({ transformOrigin: +mainContentWidth/2+'px 0px' }).transition({
						perspective: '0px',
						rotateX: '0deg'
					},500);
   
   			 }else if (xmlhttp.readyState==4 && xmlhttp.status==404){
   			 		alert("Lesson not made yet, check back at a later time.");
   			 }
  		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
}

$('#next-lesson').click(function() {
  	loadXMLDoc("htmllesson"+lessonNumber+".txt","change-content");
  	
});

$('ul li').on('click', function() {
    loadXMLDoc("htmllesson"+($(this).index()+1)+".txt","change-content");
   
});

function updateLessonNumber(){
	currentLesson = $('#current-lesson').html();
	if(typeof currentLesson != 'undefined'){
		var lesson = currentLesson.replace(/[^0-9]/g, '');
		lessonNumber = parseInt(lesson, 10)+1;
		if(isNaN(lessonNumber)){
			lessonNumber = 1;
		}
	}else if(currentLesson.Contains("wrap")){
		$('next-lesson').html('Continue');
	}
	
	$('.code').on('click', function() {
		exampleCode();
	});
}
//Open example code in new window
function exampleCode(){
	var info = $('#code-example').html();
	if(typeof info != 'undefined'){
		var w = window.open();
    	$(w.document.body).html(info);
	}
}

$('.footer').on('click', function() {
		exampleCode();
	});



$(window).resize(function(){
	mainContentWidth = $('.main-content').width();
});