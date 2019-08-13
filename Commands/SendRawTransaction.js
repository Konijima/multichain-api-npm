"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendRawTransaction(...params) {
    return params.length === 0 ? { method: 'sendrawtransaction' } : { method: 'sendrawtransaction', params };
}
exports.SendRawTransaction = SendRawTransaction;
