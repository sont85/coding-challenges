var wordSelector = function(sentence) {
    var wordArray = sentence.split(" ");
    var answer = [];
    var hitArray = [];
    var count = 0;
    var obj = {};
    var countArr = [];
    for(i = 0; i < wordArray.length; i++){
      count = 0;
      hitArray = [];
        var wordString = wordArray[i].split("");
      if(obj.hasOwnProperty(wordArray[i])){
                  
                }else{
                  obj[i] = wordArray[i];
                }
        for(j = 0; j < (wordString.length - 1); j++) {
          for (k = 0; k < (wordString.length - 1); k++){
   
            if(wordString[k] === wordString[j] && wordString[k + 1] === wordString[j]){
              hitArray.push(wordString[j]);
              count++;
              obj[wordArray[i]] = count;
              if(hitArray[k] != hitArray[j] && (hitArray[k + 1] != hitArray[j])){

                  count--;
         
              }

            }// end of wordString if
             
            
          } // end of k loop

          
        } // end of j loop
     
      } // end of i loop
   for (var key in obj) {
   if(isNaN(obj[key])){
     
   }
   else{
     countArr.push(obj[key]);
     }
    
  }// end of for var key in obj
  var countMax = Math.max.apply(Math, countArr);
  var name;

  for (name in obj) {
    if(obj[name] === countMax){
      answer.push(name);
    }
}

 console.log(answer);

};

  
wordSelector("I attribute my success to this: I never gave or took any excuse. –Florence Nightingale");