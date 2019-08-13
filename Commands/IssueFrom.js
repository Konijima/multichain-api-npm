"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IssueFrom(...params) {
    return params.length === 0 ? { method: 'issuefrom' } : { method: 'issuefrom', params };
}
exports.IssueFrom = IssueFrom;
