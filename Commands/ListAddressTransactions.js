"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListAddressTransactions(...params) {
    return params.length === 0 ? { method: 'listaddresstransactions' } : { method: 'listaddresstransactions', params };
}
exports.ListAddressTransactions = ListAddressTransactions;
