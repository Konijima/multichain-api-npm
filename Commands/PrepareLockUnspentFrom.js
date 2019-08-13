"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PrepareLockUnspentFrom(...params) {
    return params.length === 0 ? { method: 'preparelockunspentfrom' } : { method: 'preparelockunspentfrom', params };
}
exports.PrepareLockUnspentFrom = PrepareLockUnspentFrom;
