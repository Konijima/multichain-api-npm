"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function VerifyMessage(...params) {
    return params.length === 0 ? { method: 'verifymessage' } : { method: 'verifymessage', params };
}
exports.VerifyMessage = VerifyMessage;
