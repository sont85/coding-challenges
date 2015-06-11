var age = function(year, month, day){
var today = new Date();
var todayMS = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
var inputDate = new Date(year, month, day);
var inputDateMS = Date.UTC(inputDate.getFullYear(), (inputDate.getMonth() - 1), inputDate.getDate());  

var msInOneDay = 1000 * 60 * 60 * 24;
var daysTotal = ((inputDateMS - todayMS) / msInOneDay);

var yearCount = 0;
var monthCount = 0;
var dayCount = 0;  
var oneMonth = 365.25 / 12;  
var oneYear = 365.25;  

if(daysTotal < oneMonth){
	daysTotal++;
}
  
while(daysTotal > oneYear){
	daysTotal = daysTotal - oneYear;
	yearCount++;
}

if(daysTotal > oneMonth){
  while(daysTotal > oneMonth){
    daysTotal = daysTotal - oneMonth;
    monthCount++;
  }
}



if(yearCount === 0){
	console.log(monthCount + " month(s), " + Math.round(daysTotal - 1) + " day(s)" );
}
else if(yearCount === 0 & monthCount === 0){
	console.log(Math.round(daysTotal - 1) + " day(s)");
}
else{
	console.log(yearCount + " year(s), " + monthCount + " month(s), " + Math.round(daysTotal - 1) + " day(s).");
}

  
 
  
};


age(2017, 12, 17);
