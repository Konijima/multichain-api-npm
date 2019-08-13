"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ListStreamKeyItems(...params) {
    return params.length === 0 ? { method: 'liststreamkeyitems' } : { method: 'liststreamkeyitems', params };
}
exports.ListStreamKeyItems = ListStreamKeyItems;
