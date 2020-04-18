// ch3form.addEventListener('submit', function(e){
// 	var grade = document.querySelectorAll('input[name='standing']:checked');
// 	var year = ducoment.querySelectorAll('input[name='gradDate']:checked');

// 	console.log(grade);
// 	console.log(year);
// 	if (grade.length == 0 || year.length == 0){
// 		console.log('here')

// 		if (grade.length == 0 && year.length == 0){
// 			alert('You must select a class standing and graduation date!');
// 		}
// 		else if (grade.length == 0){
// 			alert('You must select a class standing!');
// 		}

// 		else {
// 			alert('You must select a graduation date!');
// 		}
// 		e.preventDefault();
// 	}
// })

$("#ch3form").submit(function(e){
	console.log("Submit hitted");
	var grade = $("input[name=standing]:checked").val();
	var year = $("input[name=gradDate]:checked").val();

	if (!grade && !year) {
		console.log("Grade and graduation year both are not selected");
		alert("You must select a class standing and graduation date!");
		e.preventDefault();
	}
	else if (!grade) {
		console.log("Only grade not selected");
		alert("You must select a class standing!");
		e.preventDefault();
	}
	else if (!year) {
		console.log("Only graduation year not selected");
		alert("You must select a graduation date!");
		e.preventDefault();
	}
	else {
		return true;
	}
});

