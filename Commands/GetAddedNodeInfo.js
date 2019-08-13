"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function GetAddedNodeInfo(...params) {
    return params.length === 0 ? { method: 'getaddednodeinfo' } : { method: 'getaddednodeinfo', params };
}
exports.GetAddedNodeInfo = GetAddedNodeInfo;
