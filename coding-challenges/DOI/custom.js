topTen = {};
topTen.text = "";
topTen.textArr = [];
topTen.wordNum = {};   
topTen.rows = 0;


    
    

$('<td></td>').text("Word").appendTo('.header'); 
$('<td></td>').text("Occurance").appendTo('.header'); 


$('#submit').click(function() {


  
  topTen.text = $('#textarea').val().toLowerCase().replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");
  topTen.textArr = topTen.text.split(" ");



for(var i = 0; i< topTen.textArr.length; i++) {
    var num = topTen.textArr[i];
    topTen.wordNum[num] = topTen.wordNum[num] ? topTen.wordNum[num]+1 : 1;

}
  
topTen.rows = topTen.textArr.length < 10 ? topTen.textArr.length : 10;

  
keysSorted = Object.keys(topTen.wordNum).sort(function(a,b){return topTen.wordNum[b]- topTen.wordNum[a]});
  
  


for (var i = 0; i < topTen.rows; i++) {

    var row = $('<tr></tr>').attr({ class: ["r0"].join(' ') }).html('<td valign="top" class="date">' + keysSorted[i] +' </td> <td valign="top" class="show-file">' + topTen.wordNum[keysSorted[i]] + '</td>').appendTo('#result-table');
  };
  
 
  
  


    topTen.wordNum = {};
    
}); //end submit click