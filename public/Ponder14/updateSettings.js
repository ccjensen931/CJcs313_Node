$(document).ready(function() {
    getName();
    getEmail();
    $("form").submit(function(e) {
        e.preventDefault();
    });
});

function getName() {
    $.get('./getRealName', function(realnameResult) {
        let firstName = realnameResult.realname[0].first_name;
        let lastName = realnameResult.realname[0].last_name;
        $("#firstName").attr("placeholder", firstName);
        $("#lastName").attr("placeholder", lastName);

        $(".realname").replaceWith('<p class="dropdown-item realname">' + firstName + ' ' + lastName + '</p>');
    });
}

function getEmail() {
    $.get('./getEmail', function(emailResult) {
        let oldEmail = '<p class="oldEmail" id="oldEmail" style="padding-left:5em">' + emailResult.email[0].email + '</p>';
        $(".oldEmail").replaceWith(oldEmail);
    })
}

function checkPasswords() {
    let password = document.getElementById("newPassword").value;
    let confirmPassword = document.getElementById("confirmNewPassword").value;

    if (password == confirmPassword) {
        document.getElementById("passwordCheck").innerHTML = "";
        return true;
    } else {
        document.getElementById("passwordCheck").innerHTML = "Passwords do not match!";
        return false;
    }
}

function updateSettings() {
    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;
    let confirmNewPassword = document.getElementById("confirmNewPassword").value;
    let newEmail = document.getElementById("newEmail").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let newPasswordCheck = false;

    if (newPassword) {
        if (confirmNewPassword) {
            newPasswordCheck = checkPasswords(newPassword, confirmNewPassword);

            if (newPasswordCheck) {
                if (oldPassword) {
                    $.post("./checkPassword", { password: oldPassword }, function(result) {
                        if (result.correct) {
                            updatePassword(newPassword);
                        } else {
                            passwordError("Password incorrect, please try again.");
                        }
                    });
                } else {
                    passwordError("To continue, please confirm you current password");        
                }
            } else {
                passwordError("Passwords did not match. Please try again");
            }
        } else {
            passwordError("You must confirm your new password");
        }
    }
    if (newEmail) {
        $.post("./checkEmail", { email: newEmail }, function(result) {
            if (result.available) {
                updateEmail(newEmail);
            } else {
                emailError("Email is already in use");
            }
        });
    }
    if (firstName) {
        updateFirstName(firstName);
    }
    if (lastName) {
        updateLastName(lastName);
    }
}

function passwordError(error) {
    $("#password").attr("class", "show");
    $(".passwordError").replaceWith('<p class="passwordError" style="color:red">' + error + '</p>');
}

function hidePasswordError() {
    $("#password").attr("class", "collapse");
    $(".passwordError").replaceWith('<p class="passwordError" style="color:red"></p>');
}

function emailError(error) {
    $("#email").attr("class", "show");
    $(".emailError").replaceWith('<p class="emailError" style="color:red">' + error + '</p>');
}

function hideEmailError() {
    $("#email").attr("class", "collapse");
    $(".emailError").replaceWith('<p class="emailError" style="color:red"></p>');
}

function updatePassword(password) {
    document.getElementById("oldPassword").value = "";
    document.getElementById("newPassword").value = "";
    document.getElementById("confirmNewPassword").value = "";

    $.post('./updatePassword', { newPassword: password }, function(result) {
        if (result.success) {
            hidePasswordError();
        } else {
            passwordError("Something went wrong, please try again later");
        }
    });
}

function updateEmail(email) {
    document.getElementById("newEmail").value = "";

    $.post('./updateEmail', { email: email }, function(result) {
        if (result.success) {
            hideEmailError();
            getEmail();
        } else {
            emailError("Something went wrong, please try again later");
        }
    });
}

function updateFirstName(firstName) {
    document.getElementById("firstName").value = "";

    $.post('./updateFirstName', { firstName: firstName }, function(result) {
        if (result.success) {
            $("#name").attr("class", "collapse");
            getName();
        }
    });
}

function updateLastName(lastName) {
    document.getElementById("lastName").value = "";

    $.post('./updateLastName', { lastName: lastName }, function(result) {
        if (result.success) {
            $("#name").attr("class", "collapse");
            getName();
        }
    });
}

function deleteAccount() {
    $.post('./deleteAccount', function(result) {
        if (result.success) {
            window.location.replace("/ponder14/logout");
        } else {
            window.alert("An error occured, please try again later");
        }
    });
}