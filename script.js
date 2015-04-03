var currentLesson;
var lessonNumber;


$(document).ready(function(){
	
	currentLesson = $('#current-lesson').html();
	var lesson = currentLesson.replace(/[^0-9]/g, '');
	lessonNumber = parseInt(lesson, 10)+1;
	alert(lessonNumber);

	




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
    				currentLesson = $('#current-lesson').html();
					var lesson = currentLesson.replace(/[^0-9]/g, '');
					lessonNumber = parseInt(lesson, 10)+1;
					alert(lessonNumber+"update");
   			 }
  		}
		xmlhttp.open("GET",url,true);
		xmlhttp.send();
}

$('#next-lesson').click(function() {
	alert("boomers");
  	loadXMLDoc("htmllesson"+lessonNumber+".txt","change-content");
});
