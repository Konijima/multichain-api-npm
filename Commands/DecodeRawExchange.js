"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function DecodeRawExchange(transaction, verbose) {
    const params = [transaction, verbose].filter(v => v !== undefined);
    return { method: 'decoderawexchange', params };
}
exports.DecodeRawExchange = DecodeRawExchange;
