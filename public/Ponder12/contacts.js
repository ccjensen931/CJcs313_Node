$(document).ready(function() {
    loadContacts();
});

function loadContacts() {
    $.get('./getCurrentContacts', function(contactResults) {
        let list = '<ul class="list-group ml-5">';
        contactResults.contacts.forEach(element => {
            let listItem = '<li class="list-group-item"><div class="row"><div class="col-4 align-center"><p style="display:inline;">'
                + element.username + '</p></div><div class="col-4 align-center"><p style="display:inline;">'
                + element.first_name + ' ' + element.last_name + '</p></div>'
                + '<div class="col-4 align-center"><button type="button" class="btn btn-danger" id ="' 
                + element.user_id + '" onclick=deleteContact(this.id) style="display:inline;">Remove</button></div></div></li>';

                list += listItem;
        });
        list += '</ul>';
        $(".list-group").replaceWith(list);
    });
}

function loadAvailable(inputField) {
    $.get('./getAvailableContacts', function(contactResults) {
        let list = '<datalist id="search-results">';
        contactResults.contacts.forEach(contact => {
            let listItem = '<option lable="option1" value="' + contact.username + '">';

            list += listItem
        });
        
        $(".searchList").replaceWith(list);
    });
}

function addContact(username) {
    $.ajax({
        url: "./addContact",
        type: "POST",
        data: { username: username },
        success: function(result) {
            // console.log(result);
            loadContacts();
        }
    });
}

function deleteContact(contactId) {
    $.ajax({
        url: "./deleteContact",
        type: "DELETE",
        data: { contactId: contactId },
        success: function(result) {
            // console.log(result);
            loadContacts();
        }
    });
}