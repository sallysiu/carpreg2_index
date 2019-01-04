const App = {};
let total = 0;


$(function () {
	App.init();
});

App.init = function() {

	$("input:checkbox").prop("checked", false);

	App.formSubmit();
}


// loops through the user's answer choices and calculates the total
App.formSubmit = function() {


	// document.getElementById("formcontainer").appendChild($("form"));

	$("form").on("submit", function (event) {
		event.preventDefault ? event.preventDefault() : event.returnValue = false;	
		
		alert('hi');

		let total = 0;

		for (let i = 1; i <= 10; i += 1) {

			if (document.getElementById("q"+ i).checked) {
				total += parseInt((document.getElementById("q" + i)).value);

			}
		}


		// displays calculated sum and associated risk
		if (total <= 1) {
			$('#points').html(total);
			$("#result").html(`<p>5% risk of cardiac complications</p>`);
		}
		else if (total == 2) {
			$('#points').html(total);
			$("#result").html(`<p>10% risk of cardiac complications</p>`);
		}
		else if (total ==  3) {
			$('#points').html(total);
			$("#result").html(`<p>15% risk of cardiac complications</p>`);
		}
		else if (total == 4) {
			$('#points').html(total);
			$("#result").html(`<p>22% risk of cardiac complication<s/p>`);
		}
		else {
			$('#points').html(total);
			$("#result").html(`<p>41% risk of cardiac complications</p>`);
		}




	});

}
































// const App = {};
// let total = 0;


// $(function () {
// 	App.init();
// });

// App.init = function () {

// 	$("input:radio").prop("checked", false);

// 	$("input:radio").on("focus", function (event) {
// 		$(this).prop("checked", true)
// 	});

// 	App.formSubmit();
// }


// // loops through the user's answer choices and calculates the total
// App.formSubmit = function () {
// 	// console.log('formSubmit called')

// 	$("form").on("submit", function (event) {

// 		event.preventDefault();

// 		// console.log('submitted')

// 		let total = 0;
// 		let questions_answered = 0;

// 		for (let i = 1; i <= 10; i += 1) {

// 			for (let j = 1; document.getElementById(`q${i}_choice${j}`); j += 1) {

// 				if (document.getElementById(`q${i}_choice${j}`).checked) {
// 					questions_answered += 1;

// 					total += parseInt((document.getElementById(`q${i}_choice${j}`)).value);

// 				}

// 			}
// 			// console.log(`working total: ${total}`)
// 		}
// 		// console.log(`final total: ${total}`)
// 		// console.log(questions_answered)


// 		// checks to see if all the questions have been answered
// 		if (questions_answered < 10) {
// 			$("#result").html(`<p>Please answer all fields.</p>`);
// 		}

// 		// displays calculated sum and associated risk
// 		else {
// 			if (total <= 1) {
// 				$('#points').html(`${total}`);
// 				$("#result").html(`<p>5% risk of cardiac complications</p>`);
// 			}
// 			else if (total == 2) {
// 				$('#points').html(`${total}`);
// 				$("#result").html(`<p>10% risk of cardiac complications</p>`);
// 			}
// 			else if (total == 3) {
// 				$('#points').html(`${total}`);
// 				$("#result").html(`<p>15% risk of cardiac complications</p>`);
// 			}
// 			else if (total == 4) {
// 				$('#points').html(`${total}`);
// 				$("#result").html(`<p>22% risk of cardiac complication<s/p>`);
// 			}
// 			else {
// 				$('#points').html(`${total}`);
// 				$("#result").html(`<p>41% risk of cardiac complications</p>`);
// 			}
// 		}




// 	});

// }









































