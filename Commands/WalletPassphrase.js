"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function WalletPassphrase(...params) {
    return params.length === 0 ? { method: 'walletpassphrase' } : { method: 'walletpassphrase', params };
}
exports.WalletPassphrase = WalletPassphrase;
