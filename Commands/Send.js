"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Send an amount (or several asset amounts) to a given address.
 * @returns A JSON-RPC request for the *send* command.
 */
function Send(params) {
    return { method: 'send', params };
}
exports.Send = Send;
