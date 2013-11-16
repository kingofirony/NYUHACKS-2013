$(document).ready(function()
{
		var x = jQuery('<div/>', {
		id: 'foo',
		rel: 'external',
		text: 'Go to Google!'
		});
		
		x.css("width", "100px");
		x.css("padding", "10px");
		x.css("background","gray");
		x.css("margin","0px");
		x.css("color","white");
		x.css("border","3px");
		x.css("border-style","solid");
		x.css("border-color","black");
		x.css("position","absolute");
		x.css("left","200px");
		
	$('a.title').hover(function(){
		x.appendTo(this);
	});
	
	$('a.title').mouseleave(function(){
		x.remove(this);
	});
});