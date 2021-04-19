"use strict";
exports.__esModule = true;
exports.success = exports.error = void 0;
var antd_1 = require("antd");
var error = function (message, description) {
    return antd_1.notification.error({
        message: message,
        description: description,
        duration: 50
    });
};
exports.error = error;
var success = function (message, description) {
    return antd_1.notification.success({
        message: message,
        description: description,
        duration: 3
    });
};
exports.success = success;
