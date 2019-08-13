"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GrantWithData(...params) {
    return params.length === 0 ? { method: 'grantwithdata' } : { method: 'grantwithdata', params };
}
exports.GrantWithData = GrantWithData;
