"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PrepareLockUnspent(...params) {
    return params.length === 0 ? { method: 'preparelockunspent' } : { method: 'preparelockunspent', params };
}
exports.PrepareLockUnspent = PrepareLockUnspent;
