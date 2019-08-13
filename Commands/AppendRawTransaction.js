"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppendRawTransaction(...params) {
    return params.length === 0 ? { method: 'appendrawtransaction' } : { method: 'appendrawtransaction', params };
}
exports.AppendRawTransaction = AppendRawTransaction;
