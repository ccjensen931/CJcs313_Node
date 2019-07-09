function login(username, password) {
    $.ajax({
        url: "./login/",
        type: "POST",
        data: { username: username, password: password },
        success: function(result) {
            console.log(result);
        }
    });
}

function logout() {
    $.ajax({
        url: "./logout/",
        type: "POST",
        success: function(result) {
            console.log(result);
        }
    });
}

function getServerTime() {
    $.get("./getServerTime", function(result) {
		if (result && result.success) {
			$("#time").text("Server time: " + result.time);
		} else {
			$("#time").text("Got a result back, but it wasn't a success. Your reponse should have had a 401 status code.");
		}
	}).fail(function(result) {
		$("#time").text("Could not get server time.");
	});
}