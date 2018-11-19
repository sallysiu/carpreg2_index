const App = {};
let total = 0;


$(function () {
	App.init();
});

App.init = function() {

	$("input:radio").prop("checked", false);

	$("input:radio").on("focus", function (event) {
		$(this).prop("checked", true)
	}); 

	App.formSubmit();
}


// loops through the user's answer choices and calculates the total
App.formSubmit = function() {
	// console.log('formSubmit called')

	$("form").on("submit", function (event) {

		event.preventDefault();

		// console.log('submitted')

		let total = 0;
		let questions_answered = 0;

		for (let i = 1; i <= 10; i += 1) {

			for (let j = 1; document.getElementById(`q${i}_choice${j}`); j += 1) {

				if (document.getElementById(`q${i}_choice${j}`).checked) {
					questions_answered += 1;

					total += parseInt((document.getElementById(`q${i}_choice${j}`)).value);

				}

			}
			// console.log(`working total: ${total}`)
		}
		// console.log(`final total: ${total}`)
		// console.log(questions_answered)


		// checks to see if all the questions have been answered
		if (questions_answered < 10) {
			$("#result").html(`<p>Please answer all fields.</p>`);
		}

		// displays calculated sum and associated risk
		else {
			if (total <= 1) {
				$('#points').html(`${total}`);
				$("#result").html(`<p>5% risk of cardiac complications</p>`);
			}
			else if (total == 2) {
				$('#points').html(`${total}`);
				$("#result").html(`<p>10% risk of cardiac complications</p>`);
			}
			else if (total ==  3) {
				$('#points').html(`${total}`);
				$("#result").html(`<p>15% risk of cardiac complications</p>`);
			}
			else if (total == 4) {
				$('#points').html(`${total}`);
				$("#result").html(`<p>22% risk of cardiac complication<s/p>`);
			}
			else {
				$('#points').html(`${total}`);
				$("#result").html(`<p>41% risk of cardiac complications</p>`);
			}
		}




	});

}











































// $(function() {
// 	console.log('ready')

// 	let total = 0;

// 	$("form").on("submit", function (event) {
// 		//stop the natural behaviour of the form
// 		event.preventDefault();


// 		for (let questionNum = 1; questionNum <= 10; questionNum++) {
// //			console.log(questionNum)
// 			// for (let choiceNum = 1; document.getElementById(`q${questionNum}_choice${choiceNum}`); choiceNum += 1) {
// //				console.log(questionNum)

// 			for (let choiceNum = 1; (document.getElementById("q" + questionNum + "_choice" + choiceNum)); choiceNum++) {
// 				// console.log(document.getElementById(`q${questionNum}_choice${choiceNum}`));
// //				console.log(document.getElementById("q" + questionNum + "_choice" + choiceNum))

// 				if (document.getElementById(`q${questionNum}_choice${choiceNum}`).checked) {
					
// 					console.log(((document.getElementById(`q${questionNum}_choice${choiceNum}`)).name) + ": " + ((document.getElementById(`q${questionNum}_choice${choiceNum}`)).value))

// 					total += parseInt((document.getElementById(`q${questionNum}_choice${choiceNum}`)).value)

// 				}
// 			}
// 		}

// 		console.log(`final total: ${total}`)

		
// 		/// BELOW DOESN'T WORK 
		
// 		if (total > 10) {
// 			$("#result").html(`<p>You are a monster! You got ${total} points.</p>`);
// 		}
// 		if (total < 3) {
// 			$("#result").html(`<p>You're not even close to being a monster; you got ${total} points</p>`);
// 		}
// 		else {
// 			$("#result").html(`<p>You could be a monster; you should watch yourself since you got ${total} points </p>`);
// 		}
		
// 	});



// });