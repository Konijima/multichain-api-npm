"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateFrom(...params) {
    return params.length === 0 ? { method: 'createfrom' } : { method: 'createfrom', params };
}
exports.CreateFrom = CreateFrom;
