//Add Fixed Class to Menu
$('#menu-primary').addClass('fixed');

$(document).ready(function(){
    // Open Navigation on Toggle
	$("#toggle-menu-primary").click(function(){
		$("#menu-primary").toggleClass('open');
		$(this).toggleClass('active');
	});
	
    // Open Search on Toggle
	$("#toggle-search-primary").click(function(){
		$("#search-primary").toggleClass('open');
		$(this).toggleClass('active');
	});
	
}); // Close Doc Ready Func

