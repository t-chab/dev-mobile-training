(function () {
    'use strict';
    $(document).ready(main);
    function main() {
        var myDiv = $('#test'),
            btn1 = $('#btn1'),
            btn2 = $('#btn2');

        console.log(myDiv);
        console.log(myDiv.html());
        console.log(myDiv.text());
        console.log('From jQuery first element' + myDiv[0].innerHTML);
        console.log('From jQuery first element' + myDiv[0].innerText);

        myDiv.attr('data-myStore', 'aSampleValue');
        console.log(myDiv.on('click', function () {
            console.log(this);
        }));

        btn1.on('click', function () {
            toggle('#btn1', '#btn2');
        });
        btn2.on('click', function () {
            toggle('#btn2', '#btn1');
        });

        function toggle(pEnable, pDisable) {
            var lEnabled = $(pEnable),
                lDisabled = $(pDisable);
            /*
             lEnabled.toggleClass('green');
             lEnabled.removeClass('red');
             lDisabled.toggleClass('red');
             lDisabled.removeClass('green');
             */
            lEnabled.addClass('green').removeClass('red');
            lDisabled.addClass('red').removeClass('green');

        }
    }
}());
