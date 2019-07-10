$.post("./logout", function (result) {
    if (result.success) {
        window.location.replace("/ponder12/");
    } else {
        window.location.replace("/ponder12/inbox");
    }
});