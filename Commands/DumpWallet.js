"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Dumps all wallet keys in a human-readable format.
 * @param filename The filename.
 * @returns A JSON-RPC request for the *dumpwallet* command.
 */
function DumpWallet(filename) {
    return { method: 'dumpwallet', params: [filename] };
}
exports.DumpWallet = DumpWallet;
