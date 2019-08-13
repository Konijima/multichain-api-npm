"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetMultiBalances(...params) {
    return params.length === 0 ? { method: 'getmultibalances' } : { method: 'getmultibalances', params };
}
exports.GetMultiBalances = GetMultiBalances;
