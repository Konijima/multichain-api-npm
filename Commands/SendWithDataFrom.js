"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SendWithDataFrom(...params) {
    return params.length === 0 ? { method: 'sendwithdatafrom' } : { method: 'sendwithdatafrom', params };
}
exports.SendWithDataFrom = SendWithDataFrom;
