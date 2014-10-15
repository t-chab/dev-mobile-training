(function () {
    'use strict';
    $(document).ready(main);
    var
        isValid = true,
        key = 'idx';

    function main() {
        $('#send').on('click', check);
        $('#show').on('click', displayLocalStorage);
    }

    function check(e) {
        var formId = '#firstForm',
            inputSelector = formId + ' input',
            idx = 0;

        e.preventDefault();
        $(inputSelector).each(function (idx, elt) {
            var lElt = $(elt);
            lElt.removeClass('good').removeClass('error');
            if (lElt.val() !== '') {
                lElt.addClass('good');
            } else {
                isValid = false;
                lElt.addClass('error');
            }
        });

        if (isValid) {

            if (localStorage.getItem(key) !== null) {
                idx = localStorage.getItem(key);
                idx++;
                //idx= parseInt(idx)+1;
                localStorage.setItem(key, idx);
            }
            else {
                localStorage.setItem(key, 0);
            }

            localStorage.setItem('contact' + localStorage.getItem(key), JSON.stringify($('#firstForm').serializeObject()));
        }
    }

    function displayLocalStorage(e) {
        // Reading localStorage
        var nbItems = localStorage.getItem(key),
            frag = document.createDocumentFragment(),
            li, lPersonIdx, person, item;

        e.preventDefault();

        for (var i = 0; i <= parseInt(nbItems); i++) {
            li = document.createElement('li');
            lPersonIdx = 'contact' + i;
            person = JSON.parse(localStorage.getItem(lPersonIdx));
            item = document.createTextNode(person.firstName + ' ' + person.lastName);
            li.appendChild(item);
            frag.appendChild(li);
        }
        document.getElementById('list').appendChild(frag);
    }

    $.fn.serializeObject = function () {
        var o = {}, a = this.serializeArray();
        $.each(a, function () {
            o[this.name] = this.value || '';
        });
        return o;
    };
}());
