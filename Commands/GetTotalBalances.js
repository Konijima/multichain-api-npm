"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetTotalBalances(...params) {
    return params.length === 0 ? { method: 'gettotalbalances' } : { method: 'gettotalbalances', params };
}
exports.GetTotalBalances = GetTotalBalances;
