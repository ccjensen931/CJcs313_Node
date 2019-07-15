$(document).ready(function() {
    getNavBarData();
});

function getNavBarData() {
    $.get("./getUsername", function(usernameResult) {
        $(".username").append(usernameResult.username[0].username);
    });

    let pathname = window.location.pathname;
    pathname = pathname.split(/\/\w{8}\//)[1];
    pathname = pathname.replace(/\w/, pathname.charAt(0).toUpperCase());
    
    document.getElementById("active-path").innerHTML = pathname;

    $.get("./getRealname", function(realnameResult) {
        $(".realname").append(realnameResult.realname[0].first_name + " " + realnameResult.realname[0].last_name);
    });
}