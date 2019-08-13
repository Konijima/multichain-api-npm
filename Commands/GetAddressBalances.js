"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAddressBalances(...params) {
    return params.length === 0 ? { method: 'getaddressbalances' } : { method: 'getaddressbalances', params };
}
exports.GetAddressBalances = GetAddressBalances;
