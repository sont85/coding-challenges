function palindromicMap(input) {
    var newArray = input.split(" ");
    var output = newArray.map(function(x){
        return (x === x.split("").reverse().join(""));
    });
    return output;
};

palindromicMap("stash and pop on this level");   
