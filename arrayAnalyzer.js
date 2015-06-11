function sortNumbers(a, b){
    return a - b;
}


var arrayAnalyzer = function(){
      var numArray = [];
      var odds = 0;
      var negatives = 0;
      var sum = 0;
      for(i = 0; i < arguments.length; i++ ){
          numArray.push(arguments[i]); 
          sum = arguments[i] + sum;
        
          if(arguments[i] % 2 !== 0){
              odds += 1;
          }
          if(arguments[i] < 0){
              negatives += 1;
          }
      } //end of for loop
      
      numArray.sort(sortNumbers);
      var average = parseFloat(sum / arguments.length).toFixed(2);
      var halfofArrayLength = Math.floor((numArray.length) / 2);
      
      console.log("odds: " + odds +  ", negatives: " + negatives +  ", avg: " + average +  ", median: " + numArray[halfofArrayLength] );
    
     
   
};

arrayAnalyzer(7, -3, 0, 12, 44, -5, 3);