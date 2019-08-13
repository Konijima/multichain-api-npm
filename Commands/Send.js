"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Send an amount (or several asset amounts) to a given address. The amount is
 * a real and is rounded to the nearest 0.00000001
 * @param to The address to send to.
 * @param nativeAmount The amount in native currency to send. eg 0.1
 * @param comment A comment used to store what the transaction is for.
 * @param recipient A comment to store the name of the person or organization
 * @returns A JSON-RPC request for the *send* command.
 */
function Send(to, nativeAmount, comment, recipient) {
    const params = [to, nativeAmount, comment, recipient].filter(v => v !== undefined);
    return { method: 'send', params };
}
exports.Send = Send;
