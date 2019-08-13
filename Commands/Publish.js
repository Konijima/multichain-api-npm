"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Publish(...params) {
    return params.length === 0 ? { method: 'publish' } : { method: 'publish', params };
}
exports.Publish = Publish;
