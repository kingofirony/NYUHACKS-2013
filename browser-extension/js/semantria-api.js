var API_KEY = "72699fbc-09f6-4ac6-adb9-7dd07739a9d9";
var API_SECRET = "4905c1ba-0b2a-4eb0-ba11-24ffdedfc250";

SemantriaActiveSession = new Semantria.Session(API_KEY, API_SECRET, "Reddit Analyzer");

function comment(id,sentiment){
    this.id = id;
    this.sentiment = sentiment;
}

SemantriaActiveSession.override({
	onError: function() {
	    console.warn("onError:");
	    console.warn(arguments);
	},
	    
	    onRequest: function() {
	    console.log("onRequest:");
	    console.log(arguments);
	},
	    
	    onResponse: function() {
	    console.log("onResponse:");
	    console.log(arguments);
	},
	    onAfterResponse: function() {
	    console.log("onAfterResponse:");
	    console.log(arguments);
	}
    });

function processResponse(analyticData,callback) {
    var commentSentiments = [];
    
    for(var i=0, data;data=analyticData[i];i++) {
	// Printing of document sentiment score
	
	var id = SemantriaActiveSession.tpl("{id}", data); 
	var sentiment = SemantriaActiveSession.tpl("{sentiment_score}", data);
	
	commentSentiments.push(new comment(id,sentiment));

    }
	callback(commentSentiments);    
}


function receiveResponse(entitiesCount,callback) {
    var analyticData = [];
    var timeout = setInterval(function() {
	    console.log("Retrieving your processed results...");
	    // Requests processed results from Semantria service
	    var processedDocuments = SemantriaActiveSession.getProcessedDocuments();
	    if (processedDocuments && processedDocuments.length) {
		analyticData = analyticData.concat(processedDocuments);
	    }
	    
	    if(analyticData.length == entitiesCount) {
		clearInterval(timeout);
		processResponse(analyticData,callback);
	    } 
	}, 3000);
}

function getSemanticsFromComments(comments,callback){


    for(var i=0,text; text=comments[i]; i++) {
	// Creates a sample document which need to be processed on Semantria
	var id = Math.floor(Math.random() * 10000000);
	// Queues document for processing on Semantria service
	var status = SemantriaActiveSession.queueDocument({
		id: id,
		text: text
	    });
	
	// Check status from Semantria service
	if (status == 202) {
	    console.log("Document# " + id + " queued successfully");
	}
    }
    receiveResponse(comments.length,callback);
}





