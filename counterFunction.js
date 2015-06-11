var counterFunction = function(input){
var newArray = input.split(" ");
var output = newArray.map(function(x){
     return x.length;
    });    

var sumofArray = output.reduce(function(a, b){
    return a + b;
});

return (newArray.length + " words, " 
        + (sumofArray + (newArray.length - 1)) + " characters, " 
        + (sumofArray / newArray.length) + " chars avg word length, " 
        + (newArray.length - 1) + " spaces.");



};