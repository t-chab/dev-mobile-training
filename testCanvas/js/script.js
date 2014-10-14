/*global $:false */
$(document).ready(
    function () {
        'use strict';
        var lCanvas,
            lCtx,
            i,
            x,
            y,
            shift,
            width,
            height;
        lCanvas = document.getElementById('drawHere');
        lCtx = lCanvas.getContext('2d');
        x = 0;
        y = 0;
        shift = 10;
        height = lCanvas.height;
        width = lCanvas.width;
        try {

            lCtx.beginPath();
            for (x = 0; x < width; x = x + shift) {
                if (x === shift) {
                    lCtx.font = 'bold 20px sans-serif';
                    lCtx.fillText('x', shift, width / 2);
                }

                lCtx.moveTo(x, 0);
                lCtx.lineTo(x, width);
            }
            lCtx.strokeStyle = '#00ff00';
            lCtx.stroke();
            lCtx.closePath();

            lCtx.beginPath();
            for (y = 0; y < height; y = y + shift) {
                if (y === shift) {
                    lCtx.font = 'bold 20px sans-serif';
                    lCtx.fillText('y', height / 2, shift);
                }

                lCtx.moveTo(0, y);
                lCtx.lineTo(height, y);
            }
            lCtx.strokeStyle = '#ff0000';
            lCtx.stroke();
            lCtx.closePath();
        } catch (err) {
            alert(err);
        }
    });

