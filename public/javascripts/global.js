$(document).ready(function(){
	console.log("hello");

	var outrages = ["dummy outrage"];
	var outrageCount = 0;

	var socket = io();

	var ul = $("#messages");

	var smsDiv = $("#outrage");


	function runOutrageLoop(){

		outrageInterval = setInterval(function(){
			console.log(outrageCount)

			if(outrageCount >= outrages.length){
				outrageCount = 0
				return;
			}
			smsDiv.html(outrages[outrageCount]);
			outrageCount++;
		}, 1500);
	}

	socket.on("sms", function(msg){
		console.log(msg)
		smsDiv.html(msg);
		outrages.push(msg);
		console.log(outrages.length);
		clearInterval(outrageInterval);
		outrageCount=0;
		setTimeout(function(){
			runOutrageLoop();
		}, 3000)
	});

	runOutrageLoop();


})