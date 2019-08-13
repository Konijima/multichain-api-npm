"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Issue(...params) {
    return params.length === 0 ? { method: 'issue' } : { method: 'issue', params };
}
exports.Issue = Issue;
