"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetTxOutData(...params) {
    return params.length === 0 ? { method: 'gettxoutdata' } : { method: 'gettxoutdata', params };
}
exports.GetTxOutData = GetTxOutData;
