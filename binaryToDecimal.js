var assert_equal = function(binary, decimal){
  if(binary === decimal){
      console.log(true);
  }
  else{
    console.log(false);
  }
  
};

String.prototype.binaryToDecimal = function(){
  var numArr = this.split("").reverse(); //used reverse to simplify
  var decimal = 0;
  for(var i = 0; i < numArr.length; i++){
    var num = numArr[i] === "0" ? 0 : 1;
    decimal += Math.pow(2, i) * num;
   
  }
  

  return decimal;
  
  
};





assert_equal("11001010".binaryToDecimal(), 202);
assert_equal("1110".binaryToDecimal(), 14);




