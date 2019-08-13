"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns details on the active state of the TX memory pool.
 * @returns A JSON-RPC request for the *getmempoolinfo* command.
 */
function GetMemPoolInfo() {
    return { method: 'getmempoolinfo' };
}
exports.GetMemPoolInfo = GetMemPoolInfo;
