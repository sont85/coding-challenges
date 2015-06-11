 function wordsReverser(input) {
     var reverseString = "";
     for(i = input.length - 1; i >= 0; i--) {
         reverseString += input[i];
     }
     var reverseArray = reverseString.split(" ");
     var reverseComplete = "";
     for(i = reverseArray.length - 1; i >= 0; i--) {
         reverseComplete += reverseArray[i] + " ";
     }
     console.log(reverseComplete);

 };

 wordsReverser("This is fun, hopefully.");