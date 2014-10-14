'use strict';

String.prototype.isEmpty = function () {
    return (this.length === 0 || !this.trim());
};

var labels = document.getElementsByTagName('label');
for (var i = 0; i < labels.length; i = i + 1) {
    if (labels[i].htmlFor !== '') {
        var elem = document.getElementById(labels[i].htmlFor);
        if (elem) {
            elem.label = labels[i];
        }
    }
}

var btn = document.getElementById('submit');
btn.addEventListener('click', validate);

function validate() {
    var lInputs = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < lInputs.length; i = i + 1) {
        check(lInputs[i], ' error');
    }
}

function check(pElement, pClass) {
    var label = pElement.label;
    if (pElement.value.isEmpty()) {
        label.className = label.className + pClass;
    }
    else if (label.className.indexOf(pClass) > -1) {
        label.className = label.className.replace(pClass, '');
    }
}
