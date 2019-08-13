"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Encrypts the wallet with 'passphrase'. This is for first time encryption.
 * @param passphrase The pass phrase to encrypt the wallet with.
 * @returns A JSON-RPC request for the *encryptwallet* command.
 */
function EncryptWallet(passphrase) {
    return { method: 'encryptwallet', params: [passphrase] };
}
exports.EncryptWallet = EncryptWallet;
