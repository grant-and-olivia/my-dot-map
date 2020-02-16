$( document ).ready(function() {
	//console.log(process.env);
	$.ajax({
		url: "https://api.github.com/repos/grant-and-olivia/my-dot-map/contents/users/grant.json",
		headers: {
			"Authorization": "token d4693e1609fdcee877007a638a25e4ff21b9ece2",
			"Accept": "application/json"
		},
		dataType: "json",
	    success: function(data) {
	        console.log("content: " + atob(data.content));
	    },
	    failure: function(error) {
			console.log("error: " + error);
	    }
	});
});