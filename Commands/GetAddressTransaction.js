"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAddressTransaction(address, txId, verbose) {
    const params = [address, txId, verbose].filter(v => v !== undefined);
    return { method: 'getaddresstransaction', params };
}
exports.GetAddressTransaction = GetAddressTransaction;
