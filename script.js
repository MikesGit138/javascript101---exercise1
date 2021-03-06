var a 
var b 
var retval 
var sign
function simpleMath(){
	a = document.getElementById('a').valueAsNumber
	b = document.getElementById('b').valueAsNumber
	sign = document.getElementById('operands').value
	retval = doSimpleMath(a, b, sign)
	const rounded = Math.round(retval)
	document.getElementById('value').textContent = retval
	document.getElementById('round-value').textContent = rounded
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
	const rounded = Math.round(area)
	document.getElementById('area').textContent = area
	document.getElementById('round-rect').textContent = rounded
}

function areaWD(){
	const diameter = document.getElementById('diameter').valueAsNumber
	const area = diameter * Math.PI
	const rounded = Math.round(area)
	document.getElementById('area-w-d').textContent = area
	document.getElementById('round-w-d').textContent = rounded
}

function areaWR(){
	const radius = document.getElementById('radius').valueAsNumber
	const area = radius * radius * Math.PI
	const rounded = Math.round(area)
	document.getElementById('area-w-r').textContent = area
	document.getElementById('round-w-r').textContent = rounded
}

function areaWC(){
	const circum = document.getElementById('circum').valueAsNumber
	const area = (circum * circum) / (4 * Math.PI)
	const rounded = Math.round(area)
	document.getElementById('area-w-c').textContent = area
	document.getElementById('round-w-c').textContent = rounded
}