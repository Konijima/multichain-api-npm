"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an object containing various state info regarding P2P networking.
 * @returns A JSON-RPC request for the *getnetworkinfo* command.
 */
function GetNetworkInfo() {
    return { method: 'getnetworkinfo' };
}
exports.GetNetworkInfo = GetNetworkInfo;
