var readlineSync = require('readline-sync');

var num = readlineSync.question("Enter a number: ");

for(let i = 0;i < num;i++){
  var str = "";
  for(let j=num-1;j>=i;j--){
    str = str + "* ";
  }
  console.log(str);
}