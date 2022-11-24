/*$("h1").css("color","red");

$("#btn1").click(function(){
	var a = $("#take").val();
	if((a%4 == 0 && a%100 != 0) || a%400 == 0){
		$("#out").text("Yes, Its a Leap Year");
	}
	else if(a < 0){
		$("#out").text("Invalid");
	}
	else{
		$("#out").text("Not a Leap Year");
	}
});*/

$("btn2").click(function(){
	var w = $("#take1").val();
	var h =$("#take2").val();
	bmi = w/(h*h);
	if(bmi < 18.5){
		$("#out2").text("You are Underweight");
	}
	else if(18.5 < bmi && bmi<= 25){
		$("#out2").text("Healthy");
	}
	else if(25 < bmi && bmi <=30){
		$("#out2").text("Overweight");
	}
	else if(30  < bmi && bmi <=40){
		$("#out2").text("Obese");
	}
	else if(40 < bmi ){
		$("#out2").text("Morbidly");
	}
});