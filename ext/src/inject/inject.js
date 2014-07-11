
chrome.extension.sendMessage({hello:true}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		console.log("Got a responce: " + JSON.stringify(response, null, 4));
	}
	}, 10);
});
