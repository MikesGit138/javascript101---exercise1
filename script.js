var a 
var b 
var retval 
var sign
function simpleMath(){
	a = document.getElementById('a').valueAsNumber
	b = document.getElementById('b').valueAsNumber
	sign = document.getElementById('operands').value
	retval = doSimpleMath(a, b, sign)
	document.getElementById('value').textContent = retval
	doSimpleMath()
}

doSimpleMath = (a,b,operator ='+') => {
	 var result = 0
	 var operand = operator
	switch (operand) {
		case '+' : result = a + b
		break;
		case '-': result = a - b 
		break;
		case 'x' : result = a * b
		break;
		case '/' : result = a / b
		break;
	}
	return result
}


function areaRect(){
	const width = document.getElementById('width').valueAsNumber
	const height = document.getElementById('height').valueAsNumber
	const area = width * height
	document.getElementById('area').textContent = area
}

function areaWD(){
	const diameter = document.getElementById('diameter').valueAsNumber
	const area = diameter * Math.PI
	document.getElementById('area-w-d').textContent = area
}

function areaWR(){
	const radius = document.getElementById('radius').valueAsNumber
	const area = radius * radius * Math.PI
	document.getElementById('area-w-r').textContent = area
}

function areaWC(){
	const circum = document.getElementById('circum').valueAsNumber
	const area = (circum * circum) / (4 * Math.PI)
	document.getElementById('area-w-c').textContent = area
}