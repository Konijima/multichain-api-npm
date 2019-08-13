"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * If account is not specified, returns the server's total available balance.
 * If account is specified, returns the balance in the account.
 * Note that the account "" is not the same as leaving the parameter out.
 * The server total may be different to the balance in the default "" account.
 * @param account The selected account, or "*" for entire wallet. It may be the default account using "".
 * @param confirmations Only include transactions confirmed at least this many times.
 * @returns A JSON-RPC request for the *getbalance* command.
 */
function GetBalance(account, confirmations) {
    const params = [account, confirmations].filter(v => v !== undefined);
    return params.length === 0 ? { method: 'getbalance' } : { method: 'getbalance', params };
}
exports.GetBalance = GetBalance;
