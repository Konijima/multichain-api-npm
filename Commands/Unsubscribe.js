"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Unsubscribe(...params) {
    return params.length === 0 ? { method: 'unsubscribe' } : { method: 'unsubscribe', params };
}
exports.Unsubscribe = Unsubscribe;
