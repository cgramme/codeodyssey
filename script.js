var currentLesson;
var lessonNumber;


$(document).ready(function(){
	
	getLessonNumber();

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
    				alert("boobs");
    				getLessonNumber();
   			 }
  		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
	}

	$('#next-lesson').click(function() {
  	loadXMLDoc("htmllesson"+lessonNumber+".txt","change-content");
	});


});

function getLessonNumber(){
	currentLesson = $('#current-lesson').html();
	var lesson = currentLesson.replace(/[^0-9]/g, '');
	lessonNumber = parseInt(lesson, 10)+1;
	alert(lessonNumber);
}