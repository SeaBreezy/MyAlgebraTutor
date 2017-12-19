var myApp = new Framework7();

function sugMult(){
	myApp.modal({
	    title:  'Multiplying Monomials',
	    text: "Hey, you seem to be having trouble multiplying monomials. Would you like to try some examples from that section?",
	    buttons: [
	      {
	        text: 'Stay here',
	        onClick: function() {
	          myApp.alert('Staying here.')
	        }
	      },
	      {
	        text: 'Go now',
	        onClick: function() {
	          myApp.alert('Going now')
	        }
	      },
	    ]
	})
}

function sugAdd(){
	myApp.modal({
	    title:  'Adding like Terms',
	    text: "Hey, you seem to be having trouble adding like terms. Would you like to try some examples from that section?",
	    buttons: [
	      {
	        text: 'Stay here',
	        onClick: function() {
	          myApp.alert('Staying here.')
	        }
	      },
	      {
	        text: 'Go now',
	        onClick: function() {
	          myApp.alert('Going now')
	        }
	      },
	    ]
	})
}