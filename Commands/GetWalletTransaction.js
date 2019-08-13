"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetWalletTransaction(...params) {
    return params.length === 0 ? { method: 'getwallettransaction' } : { method: 'getwallettransaction', params };
}
exports.GetWalletTransaction = GetWalletTransaction;
