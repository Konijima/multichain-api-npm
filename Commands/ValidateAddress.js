"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ValidateAddress(...params) {
    return params.length === 0 ? { method: 'validateaddress' } : { method: 'validateaddress', params };
}
exports.ValidateAddress = ValidateAddress;
