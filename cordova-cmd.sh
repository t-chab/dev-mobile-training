#!/bin/sh

cordova create myCordovaApp
cd myCordovaApp/
cordova platform add android
cordova plugin add org.apache.cordova.camera
cordova build
cordova run android

# Xwalk install
# wget https://download.01.org/crosswalk/releases/crosswalk/android/stable/8.37.189.12/arm/crosswalk-cordova-8.37.189.12-arm.zip
# rm -Rf myCordovaApp/platforms/android/CordovaLib/*
# copy xwalk_home/framework/* to myCordovaApp/platforms/android/CordovaLib/
# copy xwalk_home/VERSION to myCordovaApp/platforms/android/
# Add permissions to android manifest :
# <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
# <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

# this finds the root directory of the Android SDK installed
# on your system, assuming the android command is on your
# path; this variable is required for the manual builds below
# $ export ANDROID_HOME=$(dirname $(dirname $(which android)))

# $ cd platforms/android/CordovaLib/

# this updates the CordovaLib project and the
# xwalk_core_library subproject and target Android 4.4.2 (API
# level 19)
# $ android update project --subprojects --path . --target "android-19"

# build both the CordovaLib and xwalk_core_library projects
# $ ant debug

# build the Android apk file
# $ cd ../../..
# $ cordova build android
