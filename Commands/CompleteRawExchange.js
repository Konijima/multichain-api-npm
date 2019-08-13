"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CompleteRawExchange(...params) {
    return params.length === 0 ? { method: 'completerawexchange' } : { method: 'completerawexchange', params };
}
exports.CompleteRawExchange = CompleteRawExchange;
