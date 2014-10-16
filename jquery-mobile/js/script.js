(function () {
    'use strict';

    var
        key = 'idx';

    $(document).on('pagechange', function () {
        if ($.mobile.activePage.attr('id') === 'addContact') {
            $('#btnSave').on('click', saveContact);
        } else if ($.mobile.activePage.attr('id') === 'listContact') {
            //initListContact();
            console.log('Not implemented');
        }
    });

    function saveContact(e) {
        var formId = '#addContactForm',
            inputSelector = formId + ' input',
            isValid = true;

        e.preventDefault();
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
            var person = $(formId).serializeObject();
            var lUserToEdit = localStorage.getItem('userToEdit');
            if (lUserToEdit === null) {
                if (localStorage.getItem(key) !== null) {
                    var lIndex = localStorage.getItem(key);
                    lIndex++;
                    localStorage.setItem(key, lIndex);
                } else {
                    localStorage.setItem(key, 0);
                }
                localStorage.setItem('contact' + localStorage.getItem(key), JSON.stringify($('#firstForm').serializeObject()));
            } else {
                localStorage.setItem(localStorage.getItem('userToEdit'), JSON.stringify(person));
                localStorage.removeItem('userToEdit');
            }
        }
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
