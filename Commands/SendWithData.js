"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendWithData(...params) {
    return params.length === 0 ? { method: 'sendwithdata' } : { method: 'sendwithdata', params };
}
exports.SendWithData = SendWithData;
