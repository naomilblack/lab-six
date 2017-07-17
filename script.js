function convertTemp(num1, num2){

var tempF= num1*(9/5)+32;
var tempC= (num1-32)*(5/9);

if (num2==="C")
{
  console.log(tempC);
} else{
  console.log(tempF);
}

}

convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(100, "F");
convertTemp(-40, "F");
