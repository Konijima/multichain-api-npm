"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreams(...params) {
    return params.length === 0 ? { method: 'liststreams' } : { method: 'liststreams', params };
}
exports.ListStreams = ListStreams;
