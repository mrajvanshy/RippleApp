/**
First attempt to try and connect to the Ripple Web Servers - Tried a new approach down below. 
**/
/*var Remote = ripple.Remote;

var remote = new Remote({
  // see the API Reference for available options
  trusted:        true,
  local_signing:  true,
  local_fee:      true,
  fee_cushion:     1.5,
  servers: [
    {
        host:    's1.ripple.com'
      , port:    443
      , secure:  true
    }
  ]
});

remote.connect(function(){

});*/


(function() {
	angular.module('RippleApp',[]).controller("mainController", function($scope, $http){
	$(document).ready(function() {
		
		if(!("WebSocket" in window)){
			$('#chatLog, input, button, #examples').fadeOut("fast");	
			$('<p>You need a browser that supports WebSockets</p>').appendTo('#container');		
		}else{
		
		connect();
			
		function connect(){
				var socket;
				var host = "wss://s1.ripple.com:443";
				var dates = [];

				try{
					var socket = new WebSocket(host);
					message('<p class="event">Socket Status: '+socket.readyState);
					socket.onopen = function(){
						message('<p class="event">Socket Status: '+socket.readyState+' (open)');	
					}
					
					socket.onmessage = function(msg){
						message('<p class="message">Received: '+msg.data);					
					}
					
					socket.onclose = function(){
						message('<p class="event">Socket Status: '+socket.readyState+' (Closed)');
					}			
						
				} catch(exception){
					message('<p>Error'+exception);
				}
					
				function send(){
					var text = $('#text').val();
					if(text==""){
						message('<p class="warning">Please enter a message');
						return ;	
					}
					try{
						socket.send(text);
						message('<p class="event">Sent: '+text)
					} catch(exception){
						message('<p class="warning">');
					}
					$('#text').val("");
				}	
				
				function message(msg){
					var length = msg.indexOf("close_time_human");
					var length2 = msg.indexOf("ledger_hash");
					var date = msg.substring(length+19, length+30);
					var hash = msg.substring(length2+14, length2 +78);
					var length_of_dates = 0;
					if (length != -1){
						$('#chatLog').append('Most Recent Transaction Date: ' + date +'</p>');
						dates.push(date);
						length_of_dates = dates.length;
						$('#chatLog').append('Number of Transactions since you connected: ' + length_of_dates + '</p>');
					}
					else if (length2 != -1){
						$('#chatLog').append('Most Recent Ledger Hash: ' + hash +'</p>');

					}
					else{
						$('#chatLog').append(msg +'</p>');
					}
				}
				
				$('#text').keypress(function(event) {
						  if (event.keyCode == '13') {
							 send();
						   }
				});	
				
				$('#disconnect').click(function(){
					socket.close();
				});

			}
			
			
		}
			
	});


	
    $scope.understand = "What can you do with a Ledger Hash?";


});
}());




