"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function AppendRawData(...params) {
    return params.length === 0 ? { method: 'appendrawdata' } : { method: 'appendrawdata', params };
}
exports.AppendRawData = AppendRawData;
