"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CombineUnspent(...params) {
    return params.length === 0 ? { method: 'combineunspent' } : { method: 'combineunspent', params };
}
exports.CombineUnspent = CombineUnspent;
