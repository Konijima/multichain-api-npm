"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Grant(...params) {
    return params.length === 0 ? { method: 'grant' } : { method: 'grant', params };
}
exports.Grant = Grant;
