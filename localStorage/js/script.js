(function () {
    'use strict';

    var data = {
        param1: 'oneValue',
        enclos: {
            param1: 'e.param1',
            param2: 'e.param2',
            animal1: {
            }
        }
    };

    console.log('Classic storage');
    localStorage.setItem('id', 'myTestValue');

    console.log('Get');
    console.log(localStorage.getItem('id'));

    console.log('Del');
    localStorage.removeItem('id');
    console.log(localStorage.getItem('id'));

    console.log('Object Store');
    localStorage.setItem('obj', JSON.stringify(data));

    console.log('Get object');
    console.log(JSON.parse(localStorage.getItem('obj')));
    console.log('Get without parse');
    console.log(localStorage.getItem('obj'));

    console.log('Store without stringify');
    localStorage.setItem('obj', data);
    console.log('Get without stringify');
    console.log(localStorage.getItem('obj'));
    console.log('Get with stringify');
    //console.log(JSON.parse(localStorage.getItem('obj')));
}());

