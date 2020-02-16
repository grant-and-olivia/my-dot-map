$( document ).ready(function() {
	//console.log(process.env);
	$.ajax({
		url: "https://api.github.com/repos/grant-and-olivia/my-dot-map/contents/users/grant.json",
		headers: {
			"Authorization": "token change",
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