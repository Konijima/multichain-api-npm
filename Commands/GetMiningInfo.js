"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a json object containing mining-related information.
 * @returns A JSON-RPC request for the *getmininginfo* command.
 */
function GetMiningInfo() {
    return { method: 'getmininginfo' };
}
exports.GetMiningInfo = GetMiningInfo;
