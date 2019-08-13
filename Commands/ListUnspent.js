"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListUnspent(...params) {
    return params.length === 0 ? { method: 'listunspent' } : { method: 'listunspent', params };
}
exports.ListUnspent = ListUnspent;
