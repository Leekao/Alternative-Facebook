chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
	// ----------------------------------------------------------
	// This part of the script triggers when page is done loading
	console.log("Hello. This message was sent from scripts/inject.js");
	console.log($);
	var classes = [
	  '.UFICommentActorName',
	  '.fwb.fcg',
	  '._5pb8._8o._8s.lfloat._ohe',
	  '._ohe.lfloat',
	  '.profileLink'
	];
	setInterval( () => {
	  classes.forEach((e) => {
	    $(e).hide();
	  });
	}, 350);
	// ----------------------------------------------------------
    }
  }, 10);
});
