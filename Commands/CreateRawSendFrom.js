"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateRawSendFrom(...params) {
    return params.length === 0 ? { method: 'createrawsendfrom' } : { method: 'createrawsendfrom', params };
}
exports.CreateRawSendFrom = CreateRawSendFrom;
