function barsClicked() {
	console.log("bbb", $(window).width() );
	if ( $(window).width() > 42 * 16) {
		return false;
	}
	console.log("aaaa");
	var left = $(".s-sidebar__nav").css('left');
	console.log(left);
	if (left == "0px") {
		console.log("cccc");
		$(".s-sidebar__nav").css('left', "-20em");
	}
	else {
		console.log("dddd");
		$(".s-sidebar__nav").css('left', "0");	
	}
}

$(document).mouseup( function(e) {
	if ( $(window).width() > 42 * 16) {
		return false;
	}
    var container = $(".s-sidebar__nav");

    // if the target of the click isn't the container nor a descendant of the container
    if ( $(".s-sidebar__trigger").css('display') != "none" &&
    	!container.is(e.target) && container.has(e.target).length === 0) {
        $(".s-sidebar__nav").css('left', "-20em");
    }
});