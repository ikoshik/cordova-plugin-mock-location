var mocklocation = {
  check: function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, 'MockLocation', 'check', []);
  }
}

cordova.addConstructor(function () {
  if (!window.plugins) {window.plugins = {};}
  
  window.plugins.mocklocation = mocklocation;
  return window.plugins.mocklocation;
});
