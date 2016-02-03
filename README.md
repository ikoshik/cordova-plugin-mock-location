# cordova-plugin-mock-location

This is a cordova plugin to check enabled\disabled GPS imitations in android settings.

## Supported Platforms

- Android

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

