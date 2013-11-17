var sentiment = 1;
var complete = true;


hoverHandler();


function setBoxData(data){

    $("#popup").css("background","#68E038");
    $("#popup").text("Getting Comments");

    var comments = [];
    for (j=0;j<data[1].data.children.length;j++)
	{
	    comments.push(data[1].data.children[j].data.body);
	    if(j>8){
		break;
	    }

	}

    arrayLengthCheck(comments);

    
}



function arrayLengthCheck(comments){
    var length = 0;
    for(i = 0;i<comments.length;i++)
    {
	length = length + comments[i].length;
    }

    if(length>8000){
	comments = comments.pop();
	arrayLengthCheck(comments);
    }
    else {

findOverallSentiment(comments);	

    }

    
    
    
}


function findOverallSentiment(comments){
    $("#popup").text("Finding Sentiment");
    
    getSemanticsFromComments(comments, summation);
}


function  summation(comments){
    var sum = 0;

    $("#popup").text("Calculating entiment"); 
    for(i = 0;i<comments.length;i++){
	sum = sum + parseFloat(comments[i].sentiment + "");
    }

    sentiment = sum;

    $("#popup").text("Sentiment Score: " + sentiment);

    if (sentiment > 0){
	$("#popup").css("background","#68E038");}
    else{
	$("#popup").css("background","#F20A0A");}
}

function hoverHandler(){

    var x = $('<div/>', {
	    id: 'popup',
	    rel: 'external',
	    text: 'Loading'});
                
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
	


	
	getComments(URL + ".json", setBoxData);


    });

        
$('a.comments').mouseleave(function(){
	x.remove();
	sentiment = 1;
    });
}


