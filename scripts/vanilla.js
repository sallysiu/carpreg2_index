
const total_points = () => {
	let total = 0

	for (let i = 1; i <= 10; i += 1) {
		// let answer_num = (document.getElementsByTagName("input")).length;
		// console.log(answer_num);
		for (let j = 1; document.getElementById(`q${i}_choice${j}`); j += 1) {
			// let exists = (document.getElementById("q" + i + "_choice" + j));
			// console.log(exists);
			if (document.getElementById("q" + i + "_choice" + j).checked) {
				 console.log(((document.getElementById("q" + i + "_choice" + j)).name) + ": " + ((document.getElementById("q" + i + "_choice" + j)).value))
				total += parseInt((document.getElementById("q" + i + "_choice" + j)).value)
			}
		}
		console.log(`working total: ${total}`)
	}
	console.log(`final total: ${total}`)


	
	if (total > 10) {
		document.getElementById("result").textContent = `You are a monster! You got ${total} points.`;
	}
	else if (total < 3) {
		document.getElementById("result").textContent = `You're not even close to being a monster; you got ${total} points`;
	}
	else {
		document.getElementById("result").textContent = `You could be a monster; you should watch yourself since you got ${total} points`;
	}
}