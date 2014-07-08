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

	var $img2 = $('#img2');
$img2.data('state', 'hover');

var enterShow = function () {
    if ($img2.data('state') === 'hover') {
        $img2.popover('show');
    }
};
var exitHide = function () {
    if ($img2.data('state') === 'hover') {
        $img2.popover('hide');
    }
};

var clickToggle = function () {
    if ($img2.data('state') === 'hover') {
        $img2.data('state', 'pinned');
    } else {
        $img2.data('state', 'hover')
        $img.popover('hover');
    }
};

$img2.popover({trigger: 'manual'})
    .on('mouseenter', enterShow)
    .on('mouseleave', exitHide)
    .on('click', clickToggle);


	//opposite click event 
	$(document).click(function(e) {
//check that e.target is not the watch now button 
//
        console.log('destroying');
        OO.Player.destroy();
	});
});



