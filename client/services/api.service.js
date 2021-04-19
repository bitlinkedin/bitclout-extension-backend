"use strict";
exports.__esModule = true;
exports.register = void 0;
var axios_1 = require("axios");
var register = function (data) {
    return axios_1["default"].post('/api/register', data).then(function (response) { return response.data; });
};
exports.register = register;
