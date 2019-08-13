"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GrantWithDataFrom(...params) {
    return params.length === 0 ? { method: 'grantwithdatafrom' } : { method: 'grantwithdatafrom', params };
}
exports.GrantWithDataFrom = GrantWithDataFrom;
