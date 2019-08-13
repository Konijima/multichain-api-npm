"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Subscribe(...params) {
    return params.length === 0 ? { method: 'subscribe' } : { method: 'subscribe', params };
}
exports.Subscribe = Subscribe;
