"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListAssets(...params) {
    return params.length === 0 ? { method: 'listassets' } : { method: 'listassets', params };
}
exports.ListAssets = ListAssets;
