#!/bin/sh

cordova create myCordovaApp
cd myCordovaApp/
cordova platform add android
cordova plugin add org.apache.cordova.camera
cordova build
cordova run android

