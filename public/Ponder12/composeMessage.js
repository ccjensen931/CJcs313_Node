function loadCurrentContacts(inputField) {
    $.get('./getCurrentContacts', function(contactResults) {
        let list = '<datalist id="search-results">';
        contactResults.contacts.forEach(contact => {
            let listItem = '<option lable="option1" value="' + contact.username + '">';

            list += listItem
        });
        
        $(".searchList").replaceWith(list);
    });
}

function sendMessage(contactUsername, subject, content) {
    $.ajax({
        url: "./sendMessage",
        type: "POST",
        data: { recipientUsername: contactUsername, subject: subject, content: content },
        success: function(result) {
            if (!result.success) {
                let errorMessage = '<div class="message_send_error"><p style="color:red">Username not found! Message could not be sent.</p></div>';
                $(".message_send_error").replaceWith(errorMessage);
            } else {
                window.location.replace("/ponder12/outbox");
            }
        },
    });
}