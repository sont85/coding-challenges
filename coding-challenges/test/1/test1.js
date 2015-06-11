var result;

//--------------------------------------------------------
// 1. argsSum()
// Takes N arguments, and should work on any number of arguments
//--------------------------------------------------------

var argsSum = function(){
  var answer = 0;
  for(var i = 0; i < arguments.length; i++){
    answer = answer + arguments[i];
    
  }
  return answer;
  
};

result = argsSum(3,7,8);
console.log(result); // 18
result = argsSum(1,1,1,1,1,1,1,1,1,1,1,1,1,1);
console.log(result); // 14



//--------------------------------------------------------
// 2. splitSum()
// Takes 2 arguments
//--------------------------------------------------------

var splitSum = function(str, splitter){
  var numArr = str.split(splitter);
  var answer = 0;
  for(var i = 0; i < numArr.length; i++){
    answer = answer + parseInt(numArr[i]);
  }
  return answer;
  
};

result = splitSum("3:4:5:1", ":");
console.log(result); // 13
result = splitSum("-1$-5$5$-4", "$");
console.log(result); // -5



//--------------------------------------------------------
// 3. createArray()
// Takes 2 arguments
//--------------------------------------------------------
var createArrayFromAtoB = function(start, end){
  var answer = [];
  for(var i = start; i <= end; i++){
    answer.push(i);
    
  }
  return answer;
};

result = createArrayFromAtoB(4, 9);
console.log(result); // [4, 5, 6, 7, 8, 9]
result = createArrayFromAtoB(-1, 3);
console.log(result); // [-1, 0, 1, 2, 3]



//--------------------------------------------------------
// 4. isTodayAWeekend()
// Takes no arguments
//--------------------------------------------------------
var isTodayAWeekend = function(){
  var today = new Date();
  var dayOfWeek = today.getDay();
  var answer = false;
  if(dayOfWeek === 0 || dayOfWeek === 6){
    answer = true;
  }
  
  return answer; 
};

result = isTodayAWeekend();
console.log(result);
// It will return true if today is Saturday or Sunday, otherwise, false



//--------------------------------------------------------
// 5. Array.map
//--------------------------------------------------------

// Fill in the array below to make the output of the map the word "CODING"
var array = [4, 28, 6, 16, 26, 12];
var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

result = array.map(function(e) { return key[e/2]; }).join('');
console.log(result); // CODING