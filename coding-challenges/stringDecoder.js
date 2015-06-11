var assert_equal = function(coded, decoded){
  var verify = coded === decoded ? true: false;
  console.log(verify);
  
};

var decodeStr = function(coded){
  var codeArr = coded.split("|");
  var codedStr = codeArr[0].split("");
  var codeKeys = codeArr[1].split(" ");
  var codeKeyNum = [];
  var finalArr = [];
  for(var i = 0; i < codeKeys.length; i++){
    var current = parseInt(codeKeys[i]);
    codeKeyNum.push(current);
    finalArr.push(codedStr[current]);

  }

                      
  return finalArr.join("");
};




assert_equal(decodeStr("sfGuisOthO12D|2 6 9 12"), "GOOD");
assert_equal(decodeStr("01R34E6D|2 5 7"), "RED");


//solved with one loop