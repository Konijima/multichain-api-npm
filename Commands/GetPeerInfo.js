"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns data about each connected network node as a json array of objects.
 * @returns A JSON-RPC request for the *getpeerinfo* command.
 */
function GetPeerInfo() {
    return { method: 'getpeerinfo' };
}
exports.GetPeerInfo = GetPeerInfo;
