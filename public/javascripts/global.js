$(document).ready(function(){
	console.log("hello");

	var socket = io();

	var ul = $("#messages");

	socket.on("hello", function(msg){
		console.log(msg)
		ul.append("<li>"+msg+"</li>");
	})
})