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

}(window.atJsUtils = window.atJsUtils || {}));
