$(document).ready(function() {
	const NAV_WIDTH = 60;
	$("#sideNavOpenButton").on("click", toggleNav);

	function toggleNav() {
		if($("#sideNav").offset().left === 0) {
			$("#sideNav").css("transform", "translateX(-" + NAV_WIDTH +"px)")
			$("#main").css("margin-left", 0);
		}
		else {
			$("#sideNav").css("transform", "translateX(0)")
			$("#main").css("margin-left", NAV_WIDTH);
		}
	}
});