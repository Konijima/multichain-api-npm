"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function WalletPassphraseChange(...params) {
    return params.length === 0 ? { method: 'walletpassphrasechange' } : { method: 'walletpassphrasechange', params };
}
exports.WalletPassphraseChange = WalletPassphraseChange;
