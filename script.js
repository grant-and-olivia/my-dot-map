$( document ).ready(function() {
	//console.log(process.env);
	$.ajax({
		url: "https://api.github.com/repos/grant-and-olivia/my-dot-map/contents/users/grant.json",
		headers: {
			"Authorization": "token 6bc9758a2898033eacdd5583252fd4b148c94b63",
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