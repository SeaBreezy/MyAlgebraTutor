var problemPackage = [];
var originalProblem = "";
newMC();

function newMC(){
	problemPackage = generateProblemFOIL();
	originalProblem = problemPackage[0];
	displayMC();
}

$(document).ready(function(){
    $(".ansW").on("touchend",function(){
    	alert("You are incorrect.");
        $(this).empty();
    });
});

$(document).ready(function(){
    $("#ansCId").on("touchend",function(){
    	alert("You are correct.");
        for(i=0; i<4;i++){
        	problemPackage.shift();
        }
        displayMC();
    });
});

function displayMC(){
	if (problemPackage.length < 5){
		alert("New Problem");
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