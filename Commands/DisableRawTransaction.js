"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DisableRawTransaction(transaction) {
    return { method: 'disablerawtransaction', params: [transaction] };
}
exports.DisableRawTransaction = DisableRawTransaction;
