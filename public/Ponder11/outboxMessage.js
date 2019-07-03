$(document).ready(function(){
    $(".card").hide();
});

$.post("./getOutbox", function(outboxResult) {
    outboxResult.messages.forEach(element => {
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

        $(".list-group").append(listItem);
    });

    $(".click").click(function() {
        let messageId = $(this).attr("id");
        $(".card").show();

        $.post("./getMessage", { messageId: messageId }, function(messageResult) {
            let messageContents = '<div class="card-body"><p>' + messageResult.message[0].message_text + '</p><form action="#" method="get"><input type="hidden" name="DeleteMessage" id=' 
                + messageId + ' value='
                + messageId + ' placeholder=""><button type="submit" class="btn btn-danger" style="display:inline;">Delete</button></form></div>';

                $(".card-body").replaceWith(messageContents);
        });
    });
});