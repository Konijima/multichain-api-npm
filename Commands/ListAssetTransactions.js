"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListAssetTransactions(...params) {
    return params.length === 0 ? { method: 'listassettransactions' } : { method: 'listassettransactions', params };
}
exports.ListAssetTransactions = ListAssetTransactions;
