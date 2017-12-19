function generateProblemFOIL(){
	var problemPackage = [];
	var startProblem = "";
	var coeffs = [];
	for(i=0; i<4; i++){
		coeffs.push(randInt(-5, 5, 1));
	}
	startProblem = coefficientToExpression(coeffs, [" (", "x + ", ")(", "x + ", ")"]); //(ax + b)(cx + d)
	problemPackage.push(startProblem);
	problemPackage = problemPackage.concat(genAns_A(coeffs));

	return problemPackage;
}

function genAns_A(coeffs){
	var toReturn = [];
	var ansCoeffs = [];
	var ansExpr = "";
	var operators = [" ", "x(", "x) + ", "x(", ") + ", "(", "x) + ", "(", ")"] //ax(cx) + ax(d) + b(cx) + b(d)

	// 1
	ansCoeffs = [coeffs[0], coeffs[1], coeffs[0], coeffs[2], coeffs[1], coeffs[3], coeffs[2], coeffs[3]];
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);

	// 2
	ansCoeffs = [coeffs[0], coeffs[1], coeffs[0], coeffs[3], coeffs[1], coeffs[2], coeffs[2], coeffs[3]];
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);

	// 3
	ansCoeffs = [coeffs[0], coeffs[0], coeffs[0], coeffs[2], coeffs[1], coeffs[3], coeffs[3], coeffs[3]];
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);

	// Correct Answer
	ansCoeffs = [coeffs[0], coeffs[2], coeffs[0], coeffs[3], coeffs[1], coeffs[2], coeffs[1], coeffs[3]];
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);

	return toReturn.concat(genAns_B(ansCoeffs));
}

function genAns_B(coeffs){
	var toReturn = [];
	var ansCoeffs = [];
	var ansExpr = "";
	var operators = [" ", "x<sup>2</sup> + ", "x + ", "x + ", ""]; //acx^2 + adx + bcx + bd

	// 1
	for(i=0; i<8; i+=2){
		ansCoeffs.push(Math.abs(coeffs[i]*coeffs[i+1]));
	}
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);
	for(i=0; i<4; i++){
		ansCoeffs.pop();
	}

	// 2
	for(i=0; i<8; i+=2){
		ansCoeffs.push(coeffs[i]+coeffs[i+1]);
	}
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);
	for(i=0; i<4; i++){
		ansCoeffs.pop();
	}

	// 3
	for(i=0; i<8; i+=2){
		ansCoeffs.push(-1*coeffs[i]*coeffs[i+1]);
	}
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);
	for(i=0; i<4; i++){
		ansCoeffs.pop();
	}

	// C
	for(i=0; i<8; i+=2){
		ansCoeffs.push(coeffs[i]*coeffs[i+1]);
	}
	ansExpr = coefficientToExpression(ansCoeffs, operators);
	toReturn.push(ansExpr);

	return toReturn.concat(genAns_C(ansCoeffs));
}

function genAns_C(coeffs){
	var toReturn = [];
	var ansCoeffs = [];
	var ansExpr = "";
	var operators = [" ", "x<sup>2</sup> + ", "x + ", ""]; //acx^2 + (ad+bc)x + bd

	// 1
	var ansCoeffs = [coeffs[0], coeffs[1]-coeffs[2], -1*coeffs[3]];;
	ansExpr = coefficientToExpression(ansCoeffs, operators); 
	toReturn.push(ansExpr);

	//2
	var ansCoeffs = [coeffs[0], Math.abs(coeffs[1]+coeffs[2]), -1*coeffs[3]];;
	ansExpr = coefficientToExpression(ansCoeffs, operators); 
	toReturn.push(ansExpr);

	//3
	var ansCoeffs = [-1*coeffs[0], coeffs[1]+coeffs[2], coeffs[2]+coeffs[3]];;
	ansExpr = coefficientToExpression(ansCoeffs, operators); 
	toReturn.push(ansExpr);

	// C
	var ansCoeffs = [coeffs[0], coeffs[1]+coeffs[2], coeffs[3]];;
	ansExpr = coefficientToExpression(ansCoeffs, operators); 
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
		toReturn = toReturn.replace("+ -", "- ");
		toReturn = toReturn.replace(" 1x"," x");
		toReturn = toReturn.replace("(1x","(x");
		toReturn = toReturn.replace("-1x","-x");
	}
	return toReturn;
}