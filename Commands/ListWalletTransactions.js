"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListWalletTransactions(...params) {
    return params.length === 0 ? { method: 'listwallettransactions' } : { method: 'listwallettransactions', params };
}
exports.ListWalletTransactions = ListWalletTransactions;
