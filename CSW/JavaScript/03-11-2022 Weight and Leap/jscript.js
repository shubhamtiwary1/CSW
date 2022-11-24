/*$("button").click(function(){
	var inputInteger + $("#take").val();
	alert(inputString);
});*/
/*function leap(){
	var year = document.getElementById("take").value;
	if(year%4 == 0 && year%100 != 0 || year%400 == 0){
		document.getElementById("out").textContent = 'Yes, Its a Leap Year';
		
	}
	else if(year < 0){
		document.getElementById("out").textContent = "Invalid";
	}
	else{
			document.getElementById("out").textContent = "Not a Leap Year";
		}
}
*/
function bmi(){
	var w = document.getElementById("take1").value;
	var h = document.getElementById("take2").value;
	bmi = w/(h*h);
	if(bmi < 18.5){
		document.getElementById("output").textContent = "You are Underweight";
	}
	else if(18.5 < bmi && bmi<= 25){
		document.getElementById("output").textContent = "Healthy";
	}
	else if(25 < bmi && bmi <=30){
		document.getElementById("output").textContent = "Overweight";
	}
	else if(30  < bmi && bmi <=40){
		document.getElementById("output").textContent = "Obese";
	}
	else if(40  < bmi ){
		document.getElementById("output").textContent = "Morbidly obese";
	}
}