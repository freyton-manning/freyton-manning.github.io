$(document).ready(function() {
	//$('.carousel').carousel(function() {
  	//	interval: 200
	//});
	$('.watch-now').on('click', function (e) {
		console.log('here');
	    $('.carousel').carousel('pause');
	    OO.Player.create('ooyalaplayer', 'NsNHRnbjrIhhwnEMJSG939wey4-c0PK7', {"autoplay":true}); 
	    $('#ooyalaplayer');
	});
	//opposite click event 
	$(document).click(function(e) {
//check that e.target is not the watch now button 
//
        console.log('destroying');
        OO.Player.destroy();
	});
});



