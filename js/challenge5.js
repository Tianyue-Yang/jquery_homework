// /* This code will happn as soon as the js file is loaded */

// /* Get all of the thumbnail images*/
// var imgs = document.querySelectorAll('img');
// var msg = 'Hover over an image below to display the image and the alt text';

// /* Loop through the array of images and add four listeners
// to each one */
// for (let i=0; i<imgs.length; i++){
// 	imgs[i].addEventListener('mouseover', show);
// 	imgs[i].addEventListener('focus', show);

// 	imgs[i].addEventListener('mouseleave', hide);
// 	imgs[i].addEventListener('blur', hide);
// }

// /*These functions execute only when the listener 
// detects the event */
// function show(){
// 	console.log('show');
// 	document.querySelector('#display').style.backgroundImage = "url('"+this.src+"')";
// 	document.querySelector('#display').innerHTML = this.alt;
// }

// function hide(){
// 	console.log('hide');
// 	document.querySelector('#display').style.backgroundImage = "url('')";
// 	document.querySelector('#display').innerHTML = msg;

// }

var msg = "Hover over an image below";

$("img").mouseenter(function() {
	console.log("A image being hovered");
	var imgUrl = $(this).attr("src");
	var alt = $(this).attr("alt");
	$("#display").css("backgroundImage", "url('"+imgUrl+"')");
	$("#display").text(alt);
});
$("img").mouseleave(function() {
	console.log("Mouse left");
	$("#display").css("backgroundImage", "url('')");
	$("#display").text(msg);
});
$("img").focus(function() {
	console.log("A image being focused")
	var imgUrl = $(this).attr("src");
	var alt = $(this).attr("alt");
	$("#display").css("backgroundImage", "url('"+imgUrl+"')");
	$("#display").text(alt);
});
$("img").blur(function() {
	console.log("Focus left");
	$("#display").css("backgroundImage", "url('')");
	$("#display").text(msg);
});
