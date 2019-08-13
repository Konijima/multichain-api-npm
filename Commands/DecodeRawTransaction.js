"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DecodeRawTransaction(transaction) {
    return { method: 'decoderawtransaction', params: [transaction] };
}
exports.DecodeRawTransaction = DecodeRawTransaction;
