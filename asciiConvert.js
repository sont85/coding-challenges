var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];

var asciiConvert = function(x){
   return String.fromCharCode(x);
};


console.log(ascii.map(asciiConvert).join(""));