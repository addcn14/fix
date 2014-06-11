alert("Welcome to the Computer Fixer!")
var help = prompt("What do you need help with? \n 1. Printer issues. \n 2. Internet issues. \n 3. Something else")
console.log(help)
var x = false
for (x){
switch (help){
  case "1":
    var printer = prompt("What happened? \n 1.")
    x=true
    break;
  case "2":
    
    x=true
    break;
  case "3":
    
    x=true
    break;
  default:
    alert('Sorry! That was not a choice. \n (Remember not to include the "." with the number.')
}
}
