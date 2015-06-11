var assertEqual = function(actual, expected){
	console.log(actual === expected ? 'PASS' : 'FAIL');
};



function PermutationStep(num) { 
    
var permArr = [],
  usedChars = [];
  
var numJoinArr = [];
var answer = 0;

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length === 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
}
  var numArr = num.toString().split("");
  permute(numArr);
  
 for(var i = 0; i < permArr.length; i++){
   var newNum = Number(permArr[i].join(""));
   numJoinArr.push(newNum);
 } 
  

  
 function sortNum(cur, next){
   return cur - next;
 } 
  
numJoinArr = numJoinArr.sort(sortNum);
  
 
  
for(j = 0; j < numJoinArr.length; j++){
  if(num === numJoinArr[j]){
    answer = numJoinArr[j + 1];
  }
}
  
  if(answer > num){
    num = answer;
  }
  else{
    num = -1;
  }
  

  




  return num; 
         
}
   



assertEqual(PermutationStep(123), 132);
assertEqual(PermutationStep(12453), 12534);
assertEqual(PermutationStep(999), -1);
assertEqual(PermutationStep(11121), 11211);
assertEqual(PermutationStep(41352), 41523);
