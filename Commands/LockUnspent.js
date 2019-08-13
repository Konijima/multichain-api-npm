"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function LockUnspent(...params) {
    return params.length === 0 ? { method: 'lockunspent' } : { method: 'lockunspent', params };
}
exports.LockUnspent = LockUnspent;
