var app=angular.module('chatApp',['ngMaterial']);
app.controller('chatController',function($scope){
	$scope.messages = [
	{
    	sender:"BOT",
    	text: "What can i do for u?????",
    	time:"1.42pm"
	},
	{
    	sender:"user",
    	text: "who is ashish",
    	time:"2.42pm"
	},
	{
    	sender:"BOT",
    	text: "waste fellow",
    	time:"2.42pm"
	
	}];
	var  exampleSocket =  new  WebSocket("ws://localhost:9000/chatSocket");
	exampleSocket.onmessage  =   function  (event) {
       var jsonData = JSON.parse(event.data);
       console.log(jsonData);    
   };
});