// challenge4_form.addEventListener('submit', function(e) {
// 	var name = document.querySelector('#name');
// 	var address = document.querySelector('#addr');

// 	if (name.value.length == 0){
// 		document.querySelector('#nameError').style.display = 'block';
// 		e.preventDefault();
// 	}
// 	else {
// 		document.querySelector('#nameError').style.display = "none";
// 	}

// 	if (address.value.length == 0){
// 		document.querySelector('#addrError').style.display = "block";
// 		e.preventDefault();
// 	}

// 	else {
// 		document.querySelector('#addrError').style.display = 'none';
// 	}
// })

$("#challenge4_form").submit(function(e) {
	var name = $("#name");
	var addr = $("#addr");

	if (name.val().length == 0) {
		console.log("Full name missed");
		$("#nameError").show();
		e.preventDefault();
	}

	else {
		console.log("Full name filled, OK");
		$("#nameError").hide();
	}

	if (addr.val().length == 0) {
		console.log("Address missed");
		$("#addrError").show();
		e.preventDefault();
	}

	else {
		console.log("Address filled, OK");
		$("#addrError").hide();
	}
});