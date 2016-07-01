(function(namespace) {
  'use strict';

  function isString(obj) {
    return Object.prototype.toString.call(obj) === "[object String]";
  }
  namespace.isString = isString;

  function isEmptyString(obj) {
    return isString(obj) && obj === "";
  }
  namespace.isEmptyString = isEmptyString;

  function isCSVString(obj) {
    return isString(obj) && obj.indexOf(',') !== -1;
  }
  namespace.isCSVString = isCSVString;

  function capitalizeFirstLetter(value) {
    if (isString(value)) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      return value;
    }
  }
  namespace.capitalizeFirstLetter = capitalizeFirstLetter;

  function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }
  namespace.isArray = isArray;

  function isObject(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  namespace.isObject = isObject;

  function formatString(string, args) {
    args = isArray(args) ? args : [args];

    var result = string.replace(/{(\d+)}/g, function (match, index) {
      return typeof args[index] != 'undefined' ? args[index] : match;
    });

    return result;
  }
  namespace.formatString = formatString;

}(window.atJsUtils = window.atJsUtils || {}));
