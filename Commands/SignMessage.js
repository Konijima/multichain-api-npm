"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SignMessage(...params) {
    return params.length === 0 ? { method: 'signmessage' } : { method: 'signmessage', params };
}
exports.SignMessage = SignMessage;
