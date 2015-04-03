var currentLesson;
var lessonNumber;


$(document).ready(function(){
	
	updateLessonNumber();

});

function loadXMLDoc(url, elementId){
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
    				 
      			$('#change-content').html();
      			$
   
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
	}
}




$('.code').on('click', function() {
	var info = $('#code-example').html();
	var w = window.open();
	alert(info);
    $(w.document.body).html(info);
	if(typeof info != 'undefined'){
		
	}

});



