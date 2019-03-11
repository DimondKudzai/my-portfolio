$(function() {
	$("#fade").hover(function() {
		$(this).slideUp("fast");
	},function() {
		$(this).show("slow");
	});
});