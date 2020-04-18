// subscribe.addEventListener('change', function() {
// 	console.log(this)
// 		var x=document.querySelector('#emailDiv');
// 		if (this.checked){
// 			console.log('selected');
// 			x.style.display = "block";
// 		}
// 		else {
// 			console.log("Not Selected");
// 			x.style.display = "none";
// 		}
// })

$(document).ready(function() {
	$('#subscribe').change(function() {
		var x = $("#emailDiv");
		x.toggle(1500);
	});
});

// $(document).ready(function() {
// 	$('#subscribe').change(function() {
// 		$("#emailDiv").toggle("slow");
// 	});
// });