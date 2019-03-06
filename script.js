var eventType = prompt("What type of event is this");
var tempFahr = prompt("What is the temperature outside");
var eventAttire;
var tempAttire;
var result;

if (eventType == "casual"){
  
  eventAttire = ("something comfy");
}

else if (eventType == "semi-formal"){
  
 eventAttire  = ("a polo");
  
} else if (eventType == "formal"){
  
 eventAttire = ("a suit");
  
}
  
if(tempFahr < 54 ) {
  
   tempAttire = ("a coat")
  
} else if (tempFahr >= 54 && tempFahr < 70) {
  
   tempAttire = ("a jacket");
  
} else if ( tempFahr > 70) {
  
   tempAttire = ("no jacket");
  
  
}
  
 result = (`Since it is ${tempFahr} degrees outside and you are going to a ${eventType} event, you should wear ${eventAttire} and ${tempAttire}`);

console.log(result);


