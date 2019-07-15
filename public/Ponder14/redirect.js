$.post("./logout", function (result) {
    if (result.success) {
        window.location.replace("/ponder14/");
    } else {
        window.location.replace("/ponder14/inbox");
    }
});