function generateProblemMULT(){
	var problemPackage = [];
	var startProblem = "";
	var coeffs = [];
	for(i=0; i<2; i++){
		coeffs.push(randInt(-9, 9, 1));
	}
	startProblem = coefficientToExpression(coeffs, [" ", "x(", "x)"]); //ax(bx)
	problemPackage.push(startProblem);
	problemPackage = problemPackage.concat(genAns_AMULT(coeffs));

	return problemPackage;
}

function genAns_AMULT(coeffs){
	var toReturn = [];
	var ansCoeffs = [];
	var ansExpr = "";
	var operators1 = [" ", "x"];
	var operators2 = [" ", "x<sup>2</sup>"];

	// 1
	ansCoeffs = [coeffs[0]+coeffs[1]];
	ansExpr = coefficientToExpression(ansCoeffs, operators1);
	toReturn.push(ansExpr);

	// 2
	ansCoeffs = [coeffs[0]+coeffs[1]];
	ansExpr = coefficientToExpression(ansCoeffs, operators2);
	toReturn.push(ansExpr);

	// 3
	ansCoeffs = [coeffs[0]*coeffs[1]];
	ansExpr = coefficientToExpression(ansCoeffs, operators1);
	toReturn.push(ansExpr);

	// Correct Answer
	ansCoeffs = [coeffs[0]*coeffs[1]];
	ansExpr = coefficientToExpression(ansCoeffs, operators2);
	toReturn.push(ansExpr);

	return toReturn;
}

// Random int from min to max. If noZero == 1, then will not return a zero.
function randInt(min, max, noZero){
	var toReturn = Math.floor(Math.random()*(max-min+1))+min;
	if(noZero && toReturn == 0)
		return randInt(min, max, noZero);
	return toReturn;
}

// Operators is an array that contains the operators and variables that separate the expression's coefficients.
function coefficientToExpression(coeffs, operators){
	toReturn = operators[0];
	for(i=0; i<operators.length-1; i++){
		toReturn += coeffs[i] + operators[i+1];
	}
	toReturn = toReturn.replace(" 0x +","");
	for(i=0; i<4; i++){
		toReturn = toReturn.replace(" 1x"," x");
		toReturn = toReturn.replace("(1x","(x");
		toReturn = toReturn.replace("-1x","-x");
	}
	return toReturn;
}
