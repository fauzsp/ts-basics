"use strict";
exports.__esModule = true;
exports.getName = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(a, b) {
    return a * b;
}
var addStrings = function (a, b) {
    if (b === void 0) { b = ""; }
    return "".concat(a, " + ").concat(b);
};
exports.addStrings = addStrings;
var format = function (title, param) {
    return "".concat(title, " ").concat(param);
};
exports.format = format;
var printFormat = function (title, param) {
    var x = (0, exports.format)(title, param);
    console.log(x);
};
exports.printFormat = printFormat;
// export const fetchUrl = (url: string): Promise<string> => {
//   return Promise.resolve(`Data from ${url}`);
// };
function introduce(salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " + ").concat(names.join(" "));
}
var getName = function (user) {
    return "first name is ".concat(user.fName, " and last name is ").concat(user.lName);
};
exports.getName = getName;
exports["default"] = addNumbers;
