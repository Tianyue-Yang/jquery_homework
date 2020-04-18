// sameAddress.addEventListener('change', function() {
// 	let home = document.querySelector('#home');
// 	let billing = document.querySelector('#bill');

// 	if (this.checked){
// 		home.value = billing.value;
// 		home.disabled = true;
// 	}
// 	else {
// 		home.value = "";
// 		home.disabled = false;
// 	}
// });

$("#sameAddress").change(function() {
	console.log("Same as above checkbox changed");
	var home = $("#home");
	var billing = $("#bill");

	if (this.checked){
		console.log("Same address");
		home.val(billing.val());
		home.css("background", "#d1d1d1");
		home.prop("disabled", true);
	}

	else {
		console.log("Not same address");
		home.val("");
		home.css("background", "white");
		home.prop("disabled", false);
	}
});