function swapCase(input) {
    var swapString = "";
    for(i = 0; i < input.length; i++){
        if(isNaN(input[i]) == false){
            swapString += input[i];
            }
        else if(input[i] == input[i].toUpperCase()){
            swapString += input[i].toLowerCase();
            }   
        else{
            swapString += input[i].toUpperCase();
            }    
       
        }
       console.log(swapString);
    };



swapCase("Life is 10% what happens to you, and 90% of how you REACT to it");