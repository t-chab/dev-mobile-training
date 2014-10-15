(function () {
    'use strict';
    $(document).ready(main);
    var formId = '#firstForm',
        inputSelector = formId + ' input',
        isValid = true,
        key = 'idx',
        idx = 0,
        nbItems;

    function main() {
        $('#send').on('click', check);
    }

    function check(e) {
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
                localStorage.setItem(key, 1);
            }

            localStorage.setItem('contact' + localStorage.getItem(key), JSON.stringify($('#firstForm').serializeObject()));
        }
    }


    // Reading localStorage
    nbItems = localStorage.getItem(key);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < nbItems; i++) {
        var div = document.createElement('div');
        var item = document.createTextNode(JSON.parse(localStorage.getItem('contact' + i)));
        div.appendChild(item);
        frag.appendChild(div);
    }

    $.fn.serializeObject = function () {
        var o = {}, a = this.serializeArray();
        $.each(a, function () {
            o[this.name] = this.value || '';
        });
        return o;
    };
}());
