"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateRawExchange(...params) {
    return params.length === 0 ? { method: 'createrawexchange' } : { method: 'createrawexchange', params };
}
exports.CreateRawExchange = CreateRawExchange;
