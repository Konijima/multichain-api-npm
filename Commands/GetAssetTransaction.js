"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAssetTransaction(asset, txId, verbose) {
    const params = [asset, txId, verbose].filter(v => v !== undefined);
    return { method: 'getassettransaction', params };
}
exports.GetAssetTransaction = GetAssetTransaction;
