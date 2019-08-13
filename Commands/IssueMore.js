"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IssueMore(...params) {
    return params.length === 0 ? { method: 'issuemore' } : { method: 'issuemore', params };
}
exports.IssueMore = IssueMore;
