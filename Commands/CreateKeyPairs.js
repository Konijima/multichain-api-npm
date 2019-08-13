"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates public/private key pairs. These key pairs are not stored in the
 * wallet.
 * @param count Number of pairs to create.
 * @returns A JSON-RPC request for the *createkeypairs* command.
 */
function CreateKeyPairs(count) {
    return count === undefined ? { method: 'createkeypairs' } : { method: 'createkeypairs', params: [count] };
}
exports.CreateKeyPairs = CreateKeyPairs;
