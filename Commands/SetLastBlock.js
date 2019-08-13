"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SetLastBlock(...params) {
    return params.length === 0 ? { method: 'setlastblock' } : { method: 'setlastblock', params };
}
exports.SetLastBlock = SetLastBlock;
