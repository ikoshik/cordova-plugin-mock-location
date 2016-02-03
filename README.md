# cordova-plugin-mock-location

This is a cordova plugin to check enabled\disabled GPS imitations in android settings.

## Supported Platforms

- Android

## Installation

Cordova remote build

    <gap:plugin name="cordova-plugin-mock-location" source="npm" />

Cordova local build

    cordova plugin add https://github.com/ikoshik/cordova-plugin-mock-location.git

## Usage

```js
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.plugins.mocklocation.check(successCallback, errorCallback);
}

function successCallback(result) {
  console.log(result); // true - enabled, false - disabled
}

function errorCallback(error) {
  console.log(error);
}
```

