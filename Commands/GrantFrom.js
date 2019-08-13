"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GrantFrom(...params) {
    return params.length === 0 ? { method: 'grantfrom' } : { method: 'grantfrom', params };
}
exports.GrantFrom = GrantFrom;
