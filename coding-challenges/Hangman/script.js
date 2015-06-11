var Hangman = {};

Hangman.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

Hangman.alphaStored = [];

Hangman.keyValue = "";

Hangman.wordArr = ['razzmatazz','puzzlingly','embezzling','zigzagging','abrasive','assimilation','audacious','authoritarian','barbaric','bedlam','belligerent','benevolent','bewildered','blasphemy','braggadocio','buoyant','cacophonous','cadaverous','calamity','castigate','chimerical','clandestine','colloquial','commodious','crestfallen','cumbersome','deleterious','descendant','detrimental','dilettante','dissonance','effervescent','egalitarian','egotistical','eloquent','empirical','facetious','fallible','fastidious','flabbergasted','foreboding','forlorn','formidable','gallant','gesticulation','glutinous','grandiose','harrowing','hegemony','hermetic','horrendous','jargon','juxtapose','kinship','lackadaisical','laconic','legitimacy','leviathan','macabre','magniloquent','malevolent','maudlin','mellifluous','narcissist','naivete','nebulous','negligence','neologism','nepotism','obedient','obsequious','odium','olfactory','omnipotent','optimist','orthodox','pacifist','palpable','pandemic','paradox','patriarchal','pertinent','pinnacle','quagmire','quaint','qualm','quantity','rampant','ravenous','recidivism','sacrosanct','sagacious','sardonic','tangential','tangible','tedious','wanderlust','ulterior','vacuous','vainglorious'];

Hangman.randWord = Hangman.wordArr[Math.round(Math.random() * 100)].split("");

Hangman.alphaWrong = [];

Hangman.wrongCount = 0;

Hangman.indexOf = 0;

Hangman.remove =  function (arr, item) {
      for(var i = arr.length; i--;) {
          if(arr[i] === item) {
              arr.splice(i, 1);
          }
      }
  }


Hangman.incorrectGuess = function(letter){
	var indexOfWord = Hangman.randWord.indexOf(letter);
	var indexOfArray = Hangman.alphaWrong.indexOf(letter);
	if(indexOfArray > -1){
		Hangman.alphaWrong.push(letter);
		Hangman.remove(Hangman.alphaWrong, Hangman.keyValue);
		
	}
	
	if(indexOfWord <= -1){
		Hangman.alphaWrong.push(letter);
	}


};





$(document).ready(function(){
		$('body').on( "keyup", function(keyPressed) {
    	
    	Hangman.keyValue = String.fromCharCode(keyPressed.keyCode).toLowerCase();
    	$('#' + Hangman.keyValue).replaceWith( '<p class="letterUsed">' + Hangman.keyValue + '</p>' );
    	Hangman.incorrectGuess(Hangman.keyValue);



    	Hangman.indexOf = Hangman.randWord.indexOf(Hangman.keyValue);
    	
    	

    
    		while(Hangman.indexOf > -1){
    			$('.letterBox').find('#' + String(Hangman.keyValue) + 1 ).replaceWith('<p class="letterCorrect">' + Hangman.keyValue + '</p>');
    	
    			 Hangman.indexOf = -1;
    		}
    	



		});	//end keyup function


	for(var i = 0; i < Hangman.randWord.length; i++){
	$('#word').append('<div class="letterBox"><p class="letterAnswer" id="' + Hangman.randWord[i] + 1 + '">'  + Hangman.randWord[i] + '</p></div>');
	}


	for(var i = 0; i < Hangman.alphabet.length; i++){
		$('#alphabet').append( '<p class="letters"' + 'id="' + Hangman.alphabet[i] + '"' + '>' + Hangman.alphabet[i] + '</p>' );
		
	}	




/*    		if(Hangman.keyValue == Hangman.alphaStored[i]){
				$('body').fadeOut(1);
				$('body').fadeIn(2); 
			
			}*/






}); //end document ready