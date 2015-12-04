$(document).ready(function(){
	console.log("hello");

	var socket = io();

	socket.on("hello", function(msg){
		console.log(msg)
	})
})