"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetTxOut(...params) {
    return params.length === 0 ? { method: 'gettxout' } : { method: 'gettxout', params };
}
exports.GetTxOut = GetTxOut;
