"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function PublishFrom(...params) {
    return params.length === 0 ? { method: 'publishfrom' } : { method: 'publishfrom', params };
}
exports.PublishFrom = PublishFrom;
