"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetRawTransaction(...params) {
    return params.length === 0 ? { method: 'getrawtransaction' } : { method: 'getrawtransaction', params };
}
exports.GetRawTransaction = GetRawTransaction;
