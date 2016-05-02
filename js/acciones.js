//javaScrip Document
$(document).ready(function(e) {
document.addEvenListener( 'deviceready',function(){
	$('#btnvibrar').on('tap',function(){
		navigator.notification.vibrate(2000);
    });
  });	
});