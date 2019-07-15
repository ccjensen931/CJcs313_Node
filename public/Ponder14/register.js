let emailValid = false;
let passwordValid = false;
let usernameValid = false;

$(document).ready(function() {
    $("form").submit(function(e) {
        e.preventDefault();
    });
});

function createAccount() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;

    if (emailValid && passwordValid && usernameValid) {
        $('.registrationError').replaceWith('<p class="registrationError" style="color:red"></p>');
        $.post('./createAccount', { username: username, password: password, email: email, firstName: firstName, lastName: lastName }, function(result) {
            if (result.success) {
                window.location.replace("/ponder14/");
            } else {
                registrationError("Something went wrong, please check try again later.");
            }
        });
    } else {
        registrationError("Something went wrong, please check your entries and try again.");
    }
}

function registrationError(error) {
    $('.registrationError').replaceWith('<p class="registrationError" style="color:red">' + error + '</p>');
}

function checkUsername() {
    let username = document.getElementById("username").value;
    $.post("./checkUsername", { username: username }, function(result) {
        if (result.available) {
            clearUsernameError();
        } else {
            usernameError();
        }
    });
}

function usernameError() {
    usernameValid = false;
    $('.usernameError').replaceWith('<p class="usernameError" style="color:red">Username Not Available</p>');
}

function clearUsernameError() {
    usernameValid = true;
    $('.usernameError').replaceWith('<p class="usernameError" style="color:red"></p>');
}

function checkPasswords() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password == confirmPassword) {
        document.getElementById("passwordError").innerHTML = "";
        passwordValid = true;
    } else {
        document.getElementById("passwordError").innerHTML = "Passwords do not match!";
        passwordValid = false;
    }
}

function checkEmail() {
    let email = document.getElementById("email").value;
    $.post("./checkEmail", { email: email }, function(result) {
        if (result.available) {
            clearEmailError();
        } else {
            emailError();
        }
    });
}

function emailError() {
    emailValid = false;
    $('.emailError').replaceWith('<p class="emailError" style="color:red">Email Already in Use</p>');
}

function clearEmailError() {
    emailValid = true;
    $('.emailError').replaceWith('<p class="emailError" style="color:red"></p>');
}