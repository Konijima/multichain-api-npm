"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns general information about this node and blockchain.
 * @returns A JSON-RPC request for the *getinfo* command.
 */
function GetInfo() {
    return { method: 'getinfo' };
}
exports.GetInfo = GetInfo;
