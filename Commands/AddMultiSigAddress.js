"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Adds a new P2SH multisig address to the wallet.
 * @param requiredSignatures Minimum number of signatures required to spend the outputs sent to the address.
 * @param keys List of public keys (or addresses) that can be used to spend the outputs sent to the address.
 * @returns A JSON-RPC request for the *addmultisigaddress* command.
 */
function AddMultiSigAddress(requiredSignatures, keys) {
    return { method: 'addmultisigaddress', params: [requiredSignatures, keys] };
}
exports.AddMultiSigAddress = AddMultiSigAddress;
