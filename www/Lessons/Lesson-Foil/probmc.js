var problemPackage = [];
var originalProblem = "";
var perfect;
var step;
newMC();


function newMC(){
	problemPackage = generateProblemFOIL();
	originalProblem = problemPackage[0];
	
  perfect = true;
  step = 1;
  displayMC();
}

$(document).ready(function(){
    $(".ansW").click(function(){
      $(this).empty();
    	switch(step){ ////////
    		case 1: 
    			errFoil();
    			break;
    		case 2:
    			errMult();
    			break;
    		case 3:
    			errAdd();
    			break;
    		default:
    			break;
    	} 
    	perfect = false; ///////
      
    });
});


$(document).ready(function(){
    $("#ansCId").click(function(){

        for(i=0; i<4;i++){
        	problemPackage.shift();
        }
        step++;
        displayMC();
    });
});
function displayMC(){
	if (problemPackage.length < 5){
		localStorage.total++;
		alert("Good Job! Keep Going!");
		if(perfect)
    		errNone();

    newMC();
	}
	document.getElementById("currentProblemId").innerHTML = problemPackage[0];
	document.getElementById("ans1Id").innerHTML = problemPackage[1];
	document.getElementById("ans2Id").innerHTML = problemPackage[2];
	document.getElementById("ans3Id").innerHTML = problemPackage[3];
	document.getElementById("ansCId").innerHTML = problemPackage[4];
	$(document).ready(function (name) {
	    return function () {
	        $.each($(name), function (p1, p2) {
	            var randPos = Math.floor(Math.random() * 5);
	            $(p2).insertBefore($(name)[randPos]);
	        })
	        return;
	    }
	}(".ans"));
}

