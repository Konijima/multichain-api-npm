"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Revoke permission from a given address. The amount is a real
 * @param to The addresses(es) to revoke permissions from.
 * @param permissions Permission strings, comma delimited.
 * @param nativeAmount Native currency amount to send. eg 0.1. Default - 0.
 * @param comment A comment used to store what the transaction is for.
 * @param recipient A comment to store the name of the person or organization
 * @returns A JSON-RPC request for the *revoke* command.
 */
function Revoke(to, permissions, nativeAmount, comment, recipient) {
    const params = [to, permissions, nativeAmount, comment, recipient].filter(v => v !== undefined);
    return { method: 'revoke', params };
}
exports.Revoke = Revoke;
