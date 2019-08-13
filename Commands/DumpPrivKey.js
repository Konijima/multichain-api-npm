"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reveals the private key corresponding to 'address'.
 * Then the importprivkey can be used with this output
 * @param address The MultiChain address for the private key.
 * @returns A JSON-RPC request for the *dumpprivkey* command.
 */
function DumpPrivKey(address) {
    return { method: 'dumpprivkey', params: [address] };
}
exports.DumpPrivKey = DumpPrivKey;
