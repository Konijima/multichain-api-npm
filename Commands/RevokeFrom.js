"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function RevokeFrom(...params) {
    return params.length === 0 ? { method: 'revokefrom' } : { method: 'revokefrom', params };
}
exports.RevokeFrom = RevokeFrom;
