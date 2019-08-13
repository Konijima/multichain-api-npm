"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Create(...params) {
    return params.length === 0 ? { method: 'create' } : { method: 'create', params };
}
exports.Create = Create;
