localStorage.removeItem("total");

var tempRatio = 0;
var errQueue = [];  //max(queue.length, CAP);
const RATIO_CAP = 30;
const COR_RATIO = .9;
const FOIL_RATIO = .5;
const MULT_RATIO = .5;
const ADD_RATIO = .5;

if(typeof(Storage) == "undefined"){
	document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}
else if(localStorage.getItem("total") == undefined){
	localStorage.setItem("total", 1);
    localStorage.setItem("foil", 0);
    localStorage.setItem("mult", 0);
    localStorage.setItem("add", 0);

}

//localStorage.total++;
//document.getElementById("result").innerHTML = localStorage.getItem("total");

function errNone(){
	tempRatio = (Number(localStorage.total) - Number(localStorage.foil)) / (localStorage.total);
	if (tempRatio >= COR_RATIO){
		alert("You're a pro FOILer!");
	}
}

function errFoil(){
	localStorage.foil++;
	tempRatio = Number(localStorage.foil) / (localStorage.total);
	if (tempRatio >= FOIL_RATIO){
		alert("You're having trouble distributing the binomials. Remember- First, Outer, Inner, Last!");
	}
}

function errMult(){
	localStorage.mult++;
	tempRatio = Number(localStorage.mult) / (localStorage.total);
	if (tempRatio >= MULT_RATIO){
		if(confirm("Hey, you seem to be having trouble multiplying monomials. " + 
			"Would you like to try some examples from that section?"))
      {
       //redirect
        alert("going back to previous section");
        window.location = "../Lesson-Mult/Lesson-Mult.html";
      }
    
	}
}

function errAdd(){
	localStorage.add++;
	tempRatio = Number(localStorage.add) / (localStorage.total);
	if (tempRatio >= MULT_RATIO){
    if(confirm("Hey, you seem to be having trouble adding like terms. " + 
			"Would you like to try some examples from that section?"))
      {
        //redirect 
        alert("going back to previous section");
        window.location = "../Lesson-Add/Lesson-Add.html";
      }
	}
}



