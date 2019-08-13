"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SignRawTransaction(...params) {
    return params.length === 0 ? { method: 'signrawtransaction' } : { method: 'signrawtransaction', params };
}
exports.SignRawTransaction = SignRawTransaction;
