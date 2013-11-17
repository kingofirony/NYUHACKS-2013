$(document).ready(function()
{
		var sentiment = 1
		var x = jQuery('<div/>', {
		id: 'foo',
		rel: 'external',
		text: 'Sentiment score: ' + sentiment
		});
		
		x.css("font-family", "Verdana");
		x.css("padding", "10px");
		if (sentiment > 0)
			x.css("background","#68E038");
		else
			x.css("background","#F20A0A");
		x.css("margin","0px");
		x.css("color","black");
		x.css("border","2px");
		x.css("border-style","solid");
		x.css("border-color","#4D4F53");
		x.css("position","absolute");
		x.css("border-radius", "3px");
		x.css("-webkit-box-shadow", "0px 0px 5px 1px rgba(164, 164, 164, 1)");
		x.css("box-shadow", "0px 0px 5px 1px rgba(164, 164, 164, 1)");
		
	$('a.comments').hover(function(){
		x.appendTo(this);
		
		$('a.comments').mousemove(function(e){
			x.css({left:e.pageX, top:e.pageY});
		});
		
		var URL = $('a.comments').attr('href');
		
	});
	
	$('a.comments').mouseleave(function(){
			x.remove();
		});
});