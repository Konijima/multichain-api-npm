"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppendRawExchange(...params) {
    return params.length === 0 ? { method: 'appendrawexchange' } : { method: 'appendrawexchange', params };
}
exports.AppendRawExchange = AppendRawExchange;
