$(document).ready(
    function () {
        'use strict';
        var lCanvas,
            lCtx,
            gradient;
        lCanvas = document.getElementById('drawHere');
        lCtx = lCanvas.getContext('2d');
        gradient = lCtx.createLinearGradient(0, 0, 500, 0);
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.6, 'aqua');
        gradient.addColorStop(0.12, 'black');
        gradient.addColorStop(0.18, 'blue');
        gradient.addColorStop(0.24, 'fuchsia');
        gradient.addColorStop(0.3, 'gray');
        gradient.addColorStop(0.36, 'green');
        gradient.addColorStop(0.42, 'lime');
        gradient.addColorStop(0.48, 'maroon');
        gradient.addColorStop(0.54, 'navy');
        gradient.addColorStop(0.6, 'olive');
        gradient.addColorStop(0.66, 'orange');
        gradient.addColorStop(0.72, 'purple');
        gradient.addColorStop(0.78, 'red');
        gradient.addColorStop(0.84, 'silver');
        gradient.addColorStop(0.9, 'teal');
        gradient.addColorStop(0.96, 'yellow');
        gradient.addColorStop(1, 'white');
        lCtx.fillStyle = gradient;
        lCtx.fillRect(0, 0, 500, 500);
    });

