let score = 0;
function addscore(value) {
	
		console.log('Value Received => ', value);
		score += value;
		document.getElementById('score').innerHTML = value;
}