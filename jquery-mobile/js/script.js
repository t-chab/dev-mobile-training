(function () {
    'use strict';

    var
        key = 'idx',
        contactId = 'data-contactId',
        userToEditLocalStorageId = 'userToEdit';

    $(document).on('pagechange', function () {
        if ($.mobile.activePage.attr('id') === 'addContact') {
            $('#btnSave').on('click', saveContact);
            preLoadUser();
        } else if ($.mobile.activePage.attr('id') === 'contactList') {
            initListContact();
        }
    });

    function preLoadUser() {
        var lUserToEdit = localStorage.getItem(userToEditLocalStorageId), person, propsList;
        if (lUserToEdit !== null) {
            person = JSON.parse(localStorage.getItem(lUserToEdit));
            propsList = listProperties(person);
            $.each(propsList, function (id, val) {
                console.log('id=' + id + ' value=' + val + ' person[' + val + ']=' + person[val]);
                $('#' + val).val(person[val]);
            });
        }
    }

    function saveContact() {
        var formId = '#addContactForm',
            inputSelector = formId + ' input',
            isValid = true,
            person = $(formId).serializeObject(),
            lUserToEdit = localStorage.getItem(userToEditLocalStorageId);

        $(inputSelector).each(function (idx, elt) {
            var lElt = $(elt);
            lElt.removeClass('good').removeClass('error');
            if (lElt.val() !== '' && parseInt(lElt.val()) !== 0) {
                lElt.addClass('good');
            } else {
                isValid = false;
                lElt.addClass('error');
            }
        });

        if (isValid) {
            if (lUserToEdit === null) {
                if (localStorage.getItem(key) !== null) {
                    var lIndex = localStorage.getItem(key);
                    lIndex++;
                    localStorage.setItem(key, lIndex);
                } else {
                    localStorage.setItem(key, 0);
                }
                localStorage.setItem('contact' + localStorage.getItem(key), JSON.stringify($(formId).serializeObject()));
            } else {
                localStorage.setItem(localStorage.getItem(userToEditLocalStorageId), JSON.stringify(person));
                localStorage.removeItem(userToEditLocalStorageId);
            }
        }
    }

    function initListContact() {
        // Reading localStorage
        var nbItems = localStorage.getItem(key),
            frag = document.createDocumentFragment(),
            li, lPersonIdx, person, item;

        for (var i = 0; i <= parseInt(nbItems); i++) {
            li = document.createElement('li');
            lPersonIdx = 'contact' + i;
            person = JSON.parse(localStorage.getItem(lPersonIdx));
            item = document.createTextNode(person.firstName + ' ' + person.lastName);
            $(li).attr(contactId, lPersonIdx);
            $(li).on('click', editItem);
            li.appendChild(item);
            frag.appendChild(li);
        }
        document.getElementById('listContact').appendChild(frag);
        $('#listContact').listview('refresh');
    }

    // Load a clicked item list into form
    function editItem(e) {
        e.preventDefault();

        // Fetch localStorage item
        var clickedElt = e.target,
            lId = clickedElt.getAttribute(contactId);
        localStorage.setItem('userToEdit', lId);
        $.mobile.changePage('addContact.html');
    }

    // Deserialize
    function listProperties(obj) {
        var propList = [];
        for (var propName in obj) {
            if (obj.hasOwnProperty(propName)) {
                propList.push(propName);
            }
        }
        return propList;
    }

    // Serialize
    $.fn.serializeObject = function () {
        var o = {}, a = this.serializeArray();
        $.each(a, function () {
            o[this.name] = this.value || '';
        });
        return o;
    };
}());
