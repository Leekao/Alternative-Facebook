chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);
	// ----------------------------------------------------------
	// This part of the script triggers when page is done loading
	var classes = [
	  '.UFICommentActorName',
	  '.fwb.fcg',
	  '._5pb8._8o._8s.lfloat._ohe',
	  '._ohe.lfloat',
	  '.profileLink',
	  '._5pcr.fbUserPost:contains("Suggested Post")',
	];
	setInterval( () => {
	  classes.forEach((e) => {
	    $(e).css('display','none');
	  });
	}, 350);
	// ----------------------------------------------------------
    }
  }, 10);
});
