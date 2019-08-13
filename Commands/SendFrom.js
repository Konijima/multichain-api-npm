"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendFrom(...params) {
    return params.length === 0 ? { method: 'sendfrom' } : { method: 'sendfrom', params };
}
exports.SendFrom = SendFrom;
