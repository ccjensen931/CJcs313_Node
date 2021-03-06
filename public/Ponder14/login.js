$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
    });
});

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    $.ajax({
        url: "./login",
        type: "POST",
        data: { username: username, password: password },
        success: function(result) {
            // console.log(result);
            if (!result.success) {
                let errorMessage = '<div class="login_error"><p style="color:red">Username/Password combination incorrect. Try signing in again.</p></div>';
                $(".login_error").replaceWith(errorMessage);
            } else {
                window.location.replace("/ponder14/inbox");
            }
        },
    });
}