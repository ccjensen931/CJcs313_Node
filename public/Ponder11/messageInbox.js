$(document).ready(function(){
    $(".card").hide();
    loadMessages();
});

function loadMessages() {
    $.get("./getInbox", function(inboxResult) {
        let list = '<ul class="list-group">';
        inboxResult.messages.forEach(element => {
            let listItem = '<li class="list-group-item"><a href="#" class="click" id='
                + element.message_id + '><p style="display:inline;">'
                + element.username + '</p>';
            if (!element.message_read) {
                listItem += '<p style="color:red;display:inline;margin-left:15px">NEW</p><p style="display:inline;margin-left:85px">'
                    + element.subject_text + '</p></a></li>';
            } else {
                listItem += '<p style="display:inline;margin-left:85px">'
                    + element.subject_text + '</p></a></li>';
            }

            list += listItem;
        });
        list += '</ul>';
        $(".list-group").replaceWith(list);

        $(".click").click(function() {
            let messageId = $(this).attr("id");
            $(".card").show();

            $.get("./getMessage?messageId=" + messageId, function(messageResult) {
                let messageContents = '<div class="card-body"><p>' + messageResult.message[0].message_text + '</p><button type="button" class="btn btn-danger" id ="'
                    + messageId + '" onclick="deleteMessage(this.id)" style="display:inline;">Delete</button></div>';

                    $(".card-body").replaceWith(messageContents);
            });
        });
    });
}

function deleteMessage(messageId) {
    console.log("Delete " + messageId);
    $.ajax({
        url: "./deleteMessage",
        type: "DELETE",
        data: { messageId: messageId, table: "received" },
        success: function(result) {
            console.log(result);
        },
        complete: loadMessages()
    });
}