$(document).ready(function(){
	$('#button').click(function(){
		alert("yay!")
		var yes = true
		while (yes === true) {
			var input = prompt("What is your computer problem?\nType in 1 for printer problems\nType in 2 for network problems")
				switch(input){
					case ("1"):
						var print = prompt("Is the printer printing?\n1 for yes, and 2 for no.").toUpperCase()
							//if (print = )
						break;
					case("2"):
						var network = prompt("Can you access Google.com?\n1 for yes and 2 for no.")
						break;
					default:
						alert("Sorry. That was not a choice.")
			}
		}
	})
})
