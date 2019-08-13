"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateRawTransaction(...params) {
    return params.length === 0 ? { method: 'createrawtransaction' } : { method: 'createrawtransaction', params };
}
exports.CreateRawTransaction = CreateRawTransaction;
