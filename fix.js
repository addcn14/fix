alert("Welcome to the Computer Fixer!")
var x = 0
while (x === 0){
var help = prompt("What do you need help with? \n 1. Printer issues. \n 2. Internet issues. \n 3. Something else")
switch (help){
  case "1":
    var printer = prompt("What happened? \n 1.")
    x=1
    break;
  case "2":
    
    x=1
    break;
  case "3":
    
    x=1
    break;
  case null:
    x=1
  default:
    alert('Sorry! That was not a choice. \n (Remember not to include the "." with the number.')
}
}
