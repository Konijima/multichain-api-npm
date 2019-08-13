"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IssueMoreFrom(...params) {
    return params.length === 0 ? { method: 'issuemorefrom' } : { method: 'issuemorefrom', params };
}
exports.IssueMoreFrom = IssueMoreFrom;
