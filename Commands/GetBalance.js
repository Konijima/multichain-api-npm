"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @returns A JSON-RPC request for the *getbalance* command.
 */
function GetBalance() {
    return { method: 'getbalance' };
}
exports.GetBalance = GetBalance;
